import fetchApi from './fetchHelper';

const demoUrl = '/a';

const clientApiCenter = {
  fetchDemo() {
    return fetchApi(demoUrl);
  }
};

export default clientApiCenter;
