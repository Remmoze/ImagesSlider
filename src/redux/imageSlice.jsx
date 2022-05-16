import { createSlice } from "@reduxjs/toolkit";

import City from "../content/city.jpg";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: City,
        speedX: -3,
        speedY: 0,
        scale: true,
        clampX: false,
        clampY: false,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },
        setSpeedX: (state, { payload }) => {
            state.speedX = payload;
        },
        setSpeedY: (state, { payload }) => {
            state.speedY = payload;
        },
        setScale: (state, { payload }) => {
            state.scale = payload;
        },
        setClampX: (state, { payload }) => {
            state.clampX = payload;
        },
        setClampY: (state, { payload }) => {
            state.clampY = payload;
        },
    },
});

export const { setImageUrl, setSpeedX, setSpeedY, setScale, setClampX, setClampY } = imageSlice.actions;

export default imageSlice.reducer;
