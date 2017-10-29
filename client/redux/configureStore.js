import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { canUseDOM } from 'exenv';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './modules';
import { persistConfig } from './persistStore.config';

const env = process.env.NODE_ENV || 'development';

const middleware = [thunk];

export default function configureStore(initState) {
  const enhancerArgs = [
    applyMiddleware(...middleware),
    autoRehydrate()
  ];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(...enhancerArgs);

  const store = createStore(
    rootReducer,
    initState,
    enhancer
  );

  if (canUseDOM) {
    persistStore(store, { ...persistConfig }, () => {
      console.log('rehydration complete');
    });
  }

  if (env === 'development' && module.hot) {
    const acceptCallback = () => {
      const nextRootReducer = require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    };
    module.hot.accept('./modules', acceptCallback);
  }

  return store;
}
