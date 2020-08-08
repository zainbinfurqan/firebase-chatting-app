import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk';
// import { createTransform } from 'redux-persist';
import rootReducer from './rootReducer';

// export const transformCircular = createTransform(
//   (inboundState, key) => Flatted.stringify(inboundState),
//   (outboundState, key) => Flatted.parse(outboundState),
// )

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel1,
  // transforms: [transformCircular],
  // blackList: ['selectedAppointment', 'auth'],
  whitelist: ['Auth', 'Chat'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

// store.subscribe(() => console.log('store =>', store.getState()));
store.subscribe(() => store.getState());
// 
export const persistor = persistStore(store);
export default store;
