
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/reducers';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    todos: todoReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;



