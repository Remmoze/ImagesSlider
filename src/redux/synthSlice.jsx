import { createSlice } from "@reduxjs/toolkit";

const synthSlice = createSlice({
    name: "synth",
    initialState: {
        floorHeight: 2 / 3, // 0..1
        numberOfLines: 40,
    },
    reducers: {
        setFloorHeight: (state, { payload }) => {
            state.floorHeight = payload;
        },
        setNumberOfLines: (state, { payload }) => {
            state.numberOfLines = payload;
        },
    },
});

export const { setFloorHeight, setNumberOfLines } = synthSlice.actions;

export default synthSlice.reducer;
