import { combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carbonReducer from './carbon'

const persistConfig = {
  key: "root",
  storage,
  whiteList: [
   "carbon"
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
 carbon:carbonReducer
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };