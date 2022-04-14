import { configureStore, combineReducers } from "@reduxjs/toolkit";

import configReducer from "./configSlice";
import gradientSlice from "./gradientSlice";
import dotsReducer from "./dotsSlice";

const rootReducer = combineReducers({
    config: configReducer,
    gradient: gradientSlice,
    dots: dotsReducer,
});

const storage = configureStore({
    reducer: rootReducer,
});

export default storage;
