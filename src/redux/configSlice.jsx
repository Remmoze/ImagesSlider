import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        debug: false,
        mode: "blinking",
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
        image: null,
    },
    reducers: {
        setImage: (state, { payload }) => {
            state.image = payload;
        },

        setGradientColors: (state, { payload }) => {
            state.colors = payload;
        },
        addGradientColor: (state, { payload }) => {
            state.colors.push(payload);
        },
        setGradientColorByIndex: (state, { payload }) => {
            state.colors[payload.index] = payload.color;
        },
        deleteGradientColorByIndex: (state, { payload }) => {
            state.colors.splice(payload, 1);
        },

        setGradientMode: (state, { payload }) => {
            state.mode = payload;
        },
        setGradientSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setGradientRotation: (state, { payload }) => {
            state.rotation = payload;
        },
    },
});

export const {
    setImage,
    setGradientMode,
    setGradientSpeed,
    setGradientRotation,
    addGradientColor,
    setGradientColorByIndex,
    deleteGradientColorByIndex,
} = configSlice.actions;

export default configSlice.reducer;
