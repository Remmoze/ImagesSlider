import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { setMode } from "../../redux/configSlice";

import Modes from "./modes/modesMenu";

const Mode = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    const changeMode = ({ target }) => dispatch(setMode(target.value));

    return (
        <>
            <Grid item mb={1}>
                <FormControl fullWidth>
                    <InputLabel>Display mode</InputLabel>
                    <Select value={config.mode} label="Display mode" onChange={changeMode}>
                        {Modes.map((mode) => (
                            <MenuItem key={mode.name} value={mode.name}>
                                {mode.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {Modes.find((mode) => mode.name === config.mode).component}
        </>
    );
};

export default Mode;
