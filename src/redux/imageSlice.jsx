import { createSlice } from "@reduxjs/toolkit";

import City from "../content/city.jpg";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: City,
        speed: 0,

        moveX: true,
        moveY: true,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setMoveX: (state, { payload }) => {
            state.moveX = payload;
        },
        setMoveY: (state, { payload }) => {
            state.moveY = payload;
        },
    },
});

export const { setImageUrl, setSpeed, setMoveX, setMoveY } = imageSlice.actions;

export default imageSlice.reducer;
