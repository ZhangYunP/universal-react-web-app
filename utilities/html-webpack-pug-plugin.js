/* eslint no-cond-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint array-callback-return: 0 */
function HtmlWebpackPugPlugin(options) {
  this.linkInjectIndex = options.linkInjectIndex || false;
  this.scriptsInject = options.scriptsInject || {}; // {body: [], head: []}
  this.linkAsynItem = options.linkAsync || {};
  this.scriptsAsyncItem = options.scriptsAsync || {};
}

function repeat(char, num) {
  let str = '';
  for (let i = 0; i < num; i++) {
    str += char;
  }
  return str;
}

function findLine(tempArr, word) {
  let LineNum = -1;
  tempArr.every((line, index) => {
    if (line.indexOf(word) !== -1) {
      LineNum = index;
      return false;
    }
    return true;
  });
  return LineNum;
}

function formateTextIndent(pos, need, pugTempArr) {
  const headIndent = pugTempArr[3].match(/^\s+/)[0].length;
  const headformateIndent = repeat(' ', headIndent);
  let formated;
  if (pos === 'head') {
    if (Array.isArray(need)) {
      formated = need.map((n) => {
        return headformateIndent + need.trim();
      });
    } else {
      formated = [headformateIndent + need.trim()];
    }
  }
  return formated;
}

function injectHelper(pugTempArr, scriptString, scriptsInject) {
  let scriptsArr = scriptString.split('\n');
  let line = 0;
  let bodyLine = 0;
  Object.keys(scriptsInject).forEach((position) => {
    if (position === 'body') {
      bodyLine = pugTempArr.length;
    } else if (position === 'head') {
      bodyLine = findLine(pugTempArr, 'body');
    }
    scriptsInject[position].every((scriptName) => {
      if (scriptName.indexOf('*') !== -1) {
        scriptsArr = formateTextIndent(position, scriptsArr, pugTempArr);
        pugTempArr.splice(bodyLine, 0, ...scriptsArr);
        scriptsArr = [];
        return false;
      } else if (toString.call(scriptName) === '[object Object]') {
        Object.keys(scriptName).forEach((name) => {
          if ((line = findLine(scriptsArr, name)) !== -1) {
            let matchScript = scriptsArr.splice(line, 1)[0];
            matchScript = formateTextIndent(position, matchScript, pugTempArr);
            pugTempArr.splice(scriptName[name], 0, ...matchScript);
          }
        });
      } else if ((line = findLine(scriptsArr, scriptName)) !== -1) {
        let matchScript = scriptsArr.splice(line, 1)[0];
        matchScript = formateTextIndent(position, matchScript, pugTempArr);
        pugTempArr.splice(bodyLine, 0, ...matchScript);
        bodyLine += 1;
      }
      return true;
    });
  });
  pugTempArr.push(...scriptsArr);
  console.log(pugTempArr);
}

function asyncHelper(asyncItems, string) {
  let targetArr = string.split('\n');
  let line;
  let olditem;
  Object.keys(asyncItems).every((asyncname) => {
    asyncItems[asyncname].every((item) => {
      if (asyncname.match(/async|defer/)) {
        if (item.indexOf('*') !== -1) {
          targetArr = targetArr.map((target) => {
            return target.replace(/\)/, `, ${asyncname})`);
          });
        } else if ((line = findLine(targetArr, item)) !== -1) {
          olditem = targetArr[line];
          targetArr[line] = olditem.replace(/\)/, `, ${asyncname})`);
        }
      } else {
        if (item.indexOf('*') !== -1) {
          targetArr = targetArr.map((target) => {
            if (asyncname === 'preload') {
              return target.replace(/\)/, `, rel="${asyncname}", as="style")`);
            }
            return target.replace(/\)/, `, rel="${asyncname}")`);
          });
        } else if ((line = findLine(targetArr, item)) !== -1) {
          if (asyncname === 'preload') {
            olditem = targetArr[line];
            targetArr[line] = olditem.replace(/\)/, `, rel="${asyncname}", as="style")`);
          }
          targetArr[line] = olditem.replace(/\)/, `, rel="${asyncname}")`);
        }
      }
    });
  });
  return targetArr.join('\n');
}

function convertScriptTag(htmlPluginData, scriptsInject, scriptsAsyncItem = {}) {
  let pugTemp = htmlPluginData.html;
  let pugTempArr = htmlPluginData.html.split('\n');
  const beforeScript = pugTempArr.slice(-2, -1)[0];
  const spaceNum = beforeScript.match(/^\s+/)[0].length;
  const shouldIndent = spaceNum + 2;
  const textIndent = repeat(' ', shouldIndent);
  let script = pugTempArr.splice(-1, 1)[0];
  script = textIndent + script.trim();
  script = script.replace(/(<script\s*)([^\s>]+?)\s*([^\s>]+?)(>)/g, (matched, startTag, contentone, contenttwo, endTag) => {
    return `script(${contentone}, ${contenttwo}`;
  }).replace(/<\/script>/g, `)\n${textIndent}`);
  script = script.split('\n').slice(0, -1).join('\n');
  script = asyncHelper(scriptsAsyncItem, script);
  if (!scriptsInject) {
    pugTempArr.push(script);
  } else {
    injectHelper(pugTempArr, script, scriptsInject);
  }
  pugTemp = pugTempArr.join('\n');
  return pugTemp;
}

function convertLinkTag(pugTemp, linkInjectIndex, linkAsynItem = {}) {
  let pugTempArr = pugTemp.split('\n');
  const linkIndent = pugTempArr[3].match(/^\s+/)[0].length;
  const rootString = pugTempArr.splice(0, 1)[0];
  const doctypeindex = rootString.indexOf('doctype');
  const doctype = rootString.substring(doctypeindex);
  let linkString = rootString.substring(0, doctypeindex);
  const textIndent = repeat(' ', linkIndent);
  linkString = textIndent + linkString.trim();
  linkString = linkString.replace(/(<link\s*)([^\s>]+?)\s*([^\s>]+?)(>)/g, (matched, startTag, contentone, contenttwo, endTag) => {
    return `link(${contentone}, ${contenttwo})`;
  }).replace(/<head>/g, '').replace(/<\/head>/g, '');
  linkString = asyncHelper(linkAsynItem, linkString);
  pugTempArr.unshift(doctype);
  if (!linkInjectIndex) {
    linkInjectIndex = findLine(pugTempArr, 'body');
  }
  pugTempArr.splice(linkInjectIndex, 0, linkString);
  pugTemp = pugTempArr.join('\n');
  return pugTemp;
}

HtmlWebpackPugPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
      let pugTemp = convertScriptTag(htmlPluginData, this.scriptsInject, this.scriptsAsyncItem);
      pugTemp = convertLinkTag(pugTemp, this.linkInjectIndex, this.linkAsynItem);
      htmlPluginData.html = pugTemp;
      callback(null, htmlPluginData);
    });
  });
};

module.exports = HtmlWebpackPugPlugin;
