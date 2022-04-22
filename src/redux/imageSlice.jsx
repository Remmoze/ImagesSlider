import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        imageUrl: null,
        repeatX: true,
        repeatY: false,
    },
    reducers: {
        setImageUrl: (state, { payload }) => {
            state.imageUrl = payload;
        },
    },
});

export const { setImageUrl } = imageSlice.actions;

export default imageSlice.reducer;
