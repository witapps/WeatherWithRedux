import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import saga from './saga';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['weather']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(saga);
  return { store, persistor };
}
