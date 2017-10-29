const React = require('react');
const { Provider } = require('react-redux');
const { Helmet } = require('react-helmet');
const serialize = require('serialize-javascript');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import { AppContainer } from 'react-hot-loader';
const { matchRoutes, renderRoutes } = require('react-router-config');
const { version } = require('../../../config');
const { createCustomError } = require('../../../libraries/errorFactory');
const routes = require('../../../client/routes').default;
const configureStore = require('../../../client/redux/configureStore').default;
/* eslint max-len: 0 */
const env = process.env.NODE_ENV || 'development';
const store = configureStore();

function serverRender(template) {
  return async (ctx, next) => {
    const branch = matchRoutes(routes, ctx.url);
    const promises = branch.map(({ route }) => {
      const fetchdata = route.component.fetchdata;
      return typeof fetchdata === 'function' ? fetchdata(store) : Promise.resolve(null);
    });
    const data = await Promise.all(promises);
    const context = {};
    const Component = env === 'development'
      ? (
        <AppContainer>
          <Provider store={store}>
            <StaticRouter context={context} location={ctx.url}>
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        </AppContainer>
      )
      : (
        <Provider store={store}>
          <StaticRouter context={context} location={ctx.url}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      );
    const markup = renderToString(Component);
    const helmet = Helmet.renderStatic();
    const ogmeta = helmet.meta.toString();
    if (context.status === 404) {
      ctx.status = 404;
    } else if (context.status === 302) {
      return ctx.redirect(context.url);
    } else {
      // serialize are not safe
      const initialState = serialize(store.getState());
      ctx.type = 'html';
      // for http1.1, html can respond from backend in streaming chunk(res.headers->tansfer-encoding:chunk)
      // h2 do not need that
      ctx.body = template.stream({
        markup,
        initialState,
        version,
        ogmeta,
        env
      });
    }
  };
}
exports.serverRender = serverRender;
