import { createSlice } from "@reduxjs/toolkit";

const dotsSlice = createSlice({
    name: "dots",
    initialState: {
        speed: 50,
        count: 100,
        maxDistance: 120,
        showDots: true,
        curve: 0,
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
        setMaxDistance: (state, { payload }) => {
            state.maxDistance = payload;
        },
        setCurve: (state, { payload }) => {
            state.curve = payload;
        },
    },
});

export const { setSpeed, setCount, setShowDots, setMaxDistance, setCurve } = dotsSlice.actions;

export default dotsSlice.reducer;
