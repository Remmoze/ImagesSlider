import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: null,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },
    },
});

export const { setImageUrl } = imageSlice.actions;

export default imageSlice.reducer;
