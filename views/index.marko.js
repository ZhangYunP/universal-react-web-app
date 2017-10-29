// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_str = marko_helpers.s,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeScript = marko_helpers.xs,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edgechrome=1\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" +
    marko_escapeXmlAttr(input.version) +
    "/dist/images/iconImage/apple-icon-114x114.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" +
    marko_escapeXmlAttr(input.version) +
    "/dist/images/iconImage/android-icon-192x192.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" +
    marko_escapeXmlAttr(input.version) +
    "/dist/images/iconImage/favicon-16x16.png\"><link rel=\"manifest\" href=\"manifest.json\"><meta name=\"msapplication-TileColor\" content=\"#ffffff\"><meta name=\"msapplication-TileImage\" content=\"" +
    marko_escapeXmlAttr(input.version) +
    "/dist/images/iconImage/ms-icon-144x144.png\"><meta name=\"theme-color\" content=\"#ffffff\"><meta name=\"description\" content=\"This is a web app demo\"><meta name=\"author\" content=\"Polo Zhang\"><title>首页</title>" +
    marko_str(input.ogmeta) +
    "</head><body>");

  component_globals_tag({}, out);

  out.w("<noscript>你需要允许JavaScript在你的浏览器上运行！</noscript><script>\n    window.__INITIAL_STATE__=" +
    marko_escapeScript(input.initialState) +
    "\n  </script><div id=\"root\">" +
    marko_str(input.markup) +
    "</div>");

  if (input.env === "development") {
    out.w("<script src=\"reload/reload.js\"></script>");
  }

  out.w("<script type=\"text/javascript\" src=\"/v1/dist/js/manifest.js\" defer></script><script type=\"text/javascript\" src=\"/v1/dist/js/vendor.js\" defer></script><script type=\"text/javascript\" src=\"/v1/dist/js/index.js\" defer></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
