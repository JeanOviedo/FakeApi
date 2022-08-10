import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import todos from "./Reducer";

const rootReducer = combineReducers({ todos });
const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);




export default store;