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
            "#FFA500", // Orange
            "#FFFF00", // Yellow
            "#008000", // Green
            "#0000FF", // Blue
            "#4B0082", // Indigo
            "#EE82EE", // Violet
        ],
        imageUrl: null,
        dotsCount: 130,
        dotsMaxDistance: 120,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },

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

        setMode: (state, { payload }) => {
            state.mode = payload;
        },
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setRotation: (state, { payload }) => {
            state.rotation = payload;
        },

        // TODO: change dotsCount to count
        setCount: (state, { payload }) => {
            state.dotsCount = payload;
        },
    },
});

export const { setImageUrl, setMode, setSpeed, setRotation, addColor, setColorByIndex, deleteColorByIndex, setCount } =
    configSlice.actions;

export default configSlice.reducer;
