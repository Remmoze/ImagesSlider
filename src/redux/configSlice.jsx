import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        debug: false,
        mode: "dots",
        imageUrl: null,
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

        setMode: (state, { payload }) => {
            state.mode = payload;
        },
    },
});

export const { setImageUrl, setMode } = configSlice.actions;

export default configSlice.reducer;
