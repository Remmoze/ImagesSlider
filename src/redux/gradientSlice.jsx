import { createSlice } from "@reduxjs/toolkit";

const gradientSlice = createSlice({
    name: "gradient",
    initialState: {
        speed: 100,
        rotation: (Math.PI * 5) / 8, //radians
        colors: [
            "#FF0000", // Red
            "#FFA500", // Orange
            "#FFFF00", // Yellow
            "#008000", // Green
            "#0000FF", // Blue
            "#4B0082", // Indigo
            "#EE82EE", // Violet
        ],
    },
    reducers: {
        /*
            Should add a smooth transition between colors
            https://stackoverflow.com/questions/30196043/how-to-display-a-smoother-gradient-in-html5-canvas
            https://stackoverflow.com/questions/21835739/smooth-color-transition-algorithm
        */

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
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setRotation: (state, { payload }) => {
            state.rotation = payload;
        },
    },
});

export const { setSpeed, setRotation, addColor, setColorByIndex, deleteColorByIndex } = gradientSlice.actions;

export default gradientSlice.reducer;
