import { createStore, } from "redux"
import rootReducer from "./rootReducer"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//to prevent the state lose of redux
const persistConfig = {
  key: 'userInfo',
  storage: storage,
//  blacklist: ['firebase_db']// which reducer want to store
};


const pReducer = persistReducer(persistConfig, rootReducer); 


//middleware


const store = createStore(
  pReducer, //above combine state in redux
)

const persistor = persistStore(store)

// store.subscribe(()=>saveToLocalStorage(store.getState()))

export { persistor,store }
