import 'isomorphic-fetch';

const baseUrl = 'http://localhost';

const defaultConfig = {
  timeout: 3000
};

let timer;

function timeout(ms) {
  return new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      reject(new Error('fetch request time out, plese reqest again'));
    }, ms);
  });
}

function checkStatus(res) {
  if (res.ok) {
    clearTimeout(timer);
    return res;
  }
  throw new Error(res.statusText);
}

function parseJson(res) {
  return res.json();
}

// node-fetch need a absolute path
function absoluteFetch(fetch) {
  return (url, options) => {
    return url.startsWith('/')
      ? fetch(baseUrl + url)
      : fetch(url);
  };
}

const fetchAbs = absoluteFetch(fetch);

const fetchApi = (url, options = {}) => {
  const finalConfig = Object.assign({}, defaultConfig, options);
  const ms = finalConfig.timeout;
  return Promise.race([
    timeout(ms),
    fetchAbs(url, finalConfig)
  ])
    .then(checkStatus)
    .then(parseJson);
};

export default fetchApi;
