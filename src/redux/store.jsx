import { configureStore, combineReducers } from "@reduxjs/toolkit";

import configReducer from "./configSlice";
import gradientSlice from "./gradientSlice";
import dotsReducer from "./dotsSlice";
import imageSlice from "./imageSlice";
import synthSlice from "./synthSlice";

const rootReducer = combineReducers({
    config: configReducer,
    gradient: gradientSlice,
    dots: dotsReducer,
    image: imageSlice,
    synth: synthSlice,
});

const storage = configureStore({
    reducer: rootReducer,
});

export default storage;
