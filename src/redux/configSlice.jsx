import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        debug: true,
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
        imageUrl: null,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },

        setColors: (state, { payload }) => {
            state.colors = payload;
        },
        addColor: (state, { payload }) => {
            state.colors.push(payload);
        },
        setColorByIndex: (state, { payload }) => {
            state.colors[payload.index] = payload.color;
        },
        deleteColorByIndex: (state, { payload }) => {
            state.colors.splice(payload, 1);
        },

        setMode: (state, { payload }) => {
            state.mode = payload;
        },
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setRotation: (state, { payload }) => {
            state.rotation = payload;
        },
    },
});

export const { setImageUrl, setMode, setSpeed, setRotation, addColor, setColorByIndex, deleteColorByIndex } =
    configSlice.actions;

export default configSlice.reducer;
