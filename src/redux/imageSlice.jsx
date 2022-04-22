import { createSlice } from "@reduxjs/toolkit";

import City from "../content/city.jpg";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: City,
        repeatX: true,
        repeatY: true,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },
        setRepeatX: (state, { payload }) => {
            state.repeatX = payload;
        },
        setRepeatY: (state, { payload }) => {
            state.repeatY = payload;
        },
    },
});

export const { setImageUrl, setRepeatX, setRepeatY } = imageSlice.actions;

export default imageSlice.reducer;
