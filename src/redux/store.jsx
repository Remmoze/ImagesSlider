import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import dotsReducer from "./dotsSlice";
import gradientSlice from "./canvasGradientSlice";

const rootReducer = combineReducers({
    config: configReducer,
    dots: dotsReducer,
    gradient: gradientSlice,
});

const storage = configureStore({
    reducer: rootReducer,
});

export default storage;
