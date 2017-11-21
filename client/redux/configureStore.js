import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { canUseDOM } from 'exenv';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './modules';

const env = process.env.NODE_ENV || 'development';

export default function configureStore(initState) {
  let persistor;

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = canUseDOM ? composeWithDevTools : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(
    rootReducer,
    initState,
    enhancer
  );

  if (canUseDOM) {
    persistor = persistStore(store);
  }

  if (env === 'development' && module.hot) {
    const acceptCallback = () => {
      const nextRootReducer = require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    };
    module.hot.accept('./modules', acceptCallback);
  }

  const runSaga = sagaMiddleware.run;
  const close = () => store.dispatch(END);

  return {
    persistor,
    runSaga,
    close,
    ...store
  };
}

