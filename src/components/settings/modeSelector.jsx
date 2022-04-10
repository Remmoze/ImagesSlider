import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { setMode } from "../../redux/configSlice";

import Blinking from "./modes/Blinking";
import Gradient from "./modes/Gradient";
import ImageSlider from "./modes/ImageSlider";
import Radial from "./modes/Radial";

import Dots from "./modes/Dots";

const Mode = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    let modes = [Blinking, Gradient, Radial, ImageSlider, Dots];

    const changeMode = ({ target }) => dispatch(setMode(target.value));

    return (
        <>
            <Grid item mb={1}>
                <FormControl fullWidth>
                    <InputLabel>Display mode</InputLabel>
                    <Select value={config.mode} label="Display mode" onChange={changeMode}>
                        {modes.map((mode) => (
                            <MenuItem key={mode.name} value={mode.name}>
                                {mode.displayName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {modes.find((mode) => mode.name === config.mode).children.map((child) => child)}
        </>
    );
};

export default Mode;
