import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Store } from 'data/types';
import router, { routerMiddleware } from 'data/router';
import user from 'data/user/reducer';

import sagaMiddleware, { runSagaMiddleware } from 'data/sagas';

const keyPrefix = 'tecmed:';

const persistConfig = {
  key: 'root',
  keyPrefix,
  blacklist: ['router'],
  storage,
};

const combinedReducers = combineReducers({
  router,
  user,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware, sagaMiddleware),
);

const store: Store = createStore(persistedReducer, enhancer);

runSagaMiddleware();

export const persistor = persistStore(store);
export default store;
