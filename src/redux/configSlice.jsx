import { createSlice } from "@reduxjs/toolkit";

import createImage from "../components/display/images";
import Lines from "../content/lines.jpg";

const configSlice = createSlice({
    name: "config",
    initialState: {
        image: createImage(Lines),
    },
    reducers: {
        setImage: (state, { payload }) => {
            state.image = payload;
        },
    },
});

export const { setImage } = configSlice.actions;

export default configSlice.reducer;
