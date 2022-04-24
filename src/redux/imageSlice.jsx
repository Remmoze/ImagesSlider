import { createSlice } from "@reduxjs/toolkit";

import City from "../content/city.jpg";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: City,
        speedX: -3,
        speedY: 0,
        scale: true,
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
    },
});

export const { setImageUrl, setSpeedX, setSpeedY, setScale } = imageSlice.actions;

export default imageSlice.reducer;
