import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import dotsReducer from "./dotsSlice";

const rootReducer = combineReducers({
    config: configReducer,
    dots: dotsReducer,
});

const storage = configureStore({
    reducer: rootReducer,
});

export default storage;
