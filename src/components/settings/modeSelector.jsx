import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { setMode } from "../../redux/configSlice";

import Blinking from "./modes/Blinking";
import Gradient from "./modes/Gradient";

const Mode = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    let modes = [Blinking, Gradient];

    return (
        <>
            <Grid item mb={1}>
                <FormControl fullWidth>
                    <InputLabel>Display mode</InputLabel>
                    <Select
                        value={config.mode}
                        label="Display mode"
                        onChange={({ target }) => dispatch(setMode(target.value))}
                    >
                        {modes.map((mode) => (
                            <MenuItem value={mode.name}>{mode.displayName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {modes.find((mode) => mode.name === config.mode).children.map((child) => child)}
        </>
    );
};

export default Mode;
