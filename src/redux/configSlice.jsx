import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        debug: false,
        mode: "Dots",
        imageUrl: null,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },

        setMode: (state, { payload }) => {
            state.mode = payload;
        },
    },
});

export const { setImageUrl, setMode } = configSlice.actions;

export default configSlice.reducer;
