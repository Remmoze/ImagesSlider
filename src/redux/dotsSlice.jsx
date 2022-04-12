import { createSlice } from "@reduxjs/toolkit";

const dotsSlice = createSlice({
    name: "dots",
    initialState: {
        speed: 100,
        count: 100,
        maxDistance: 120,
        showDots: true,
    },
    reducers: {
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setCount: (state, { payload }) => {
            console.log(payload);
            state.count = payload;
        },
        setShowDots: (state, { payload }) => {
            state.showDots = payload;
        },
    },
});

export const { setSpeed, setCount, setShowDots } = dotsSlice.actions;

export default dotsSlice.reducer;
