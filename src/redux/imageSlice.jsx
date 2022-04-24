import { createSlice } from "@reduxjs/toolkit";

import City from "../content/city.jpg";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: City,
        speedX: 1,
        speedY: 1,
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
    },
});

export const { setImageUrl, setSpeedX, setSpeedY } = imageSlice.actions;

export default imageSlice.reducer;
