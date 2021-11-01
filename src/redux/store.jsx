import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configReducer from "./configSlice";

const rootReducer = combineReducers({
    config: configReducer,
});

const storage = configureStore({
    reducer: rootReducer,
});

export default storage;
