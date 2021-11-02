import { createSlice } from "@reduxjs/toolkit";

import createImage from "../components/display/images";
import Lines from "../content/lines.jpg";

const configSlice = createSlice({
    name: "config",
    initialState: {
        mode: "gradient",
        gradient: {
            mode: "gradient", //blinking
            speed: 100,
            rotation: (Math.PI * 5) / 8, //radians
            colors: [
                "#FF0000", // Red
                "#FF7F00", // Orange
                "#FFFF00", // Yellow
                "#00FF00", // Green
                "#0000FF", // Blue
                "#4B0082", // Indigo
                "#9400D3", // Violet
            ],
        },
        image: createImage(Lines),
    },
    reducers: {
        setImage: (state, { payload }) => {
            state.image = payload;
        },
        setGradientColors: (state, { payload }) => {
            state.gradient.colors = payload;
        },
        setGradientMode: (state, { payload }) => {
            state.gradient.mode = payload;
        },
        setGradientSpeed: (state, { payload }) => {
            state.gradient.speed = payload;
        },
        setGradientRotation: (state, { payload }) => {
            state.gradient.rotation = payload;
        },
    },
});

export const { setImage, setGradientSpeed, setGradientRotation } = configSlice.actions;

export default configSlice.reducer;
