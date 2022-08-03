import React from "react";

import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import Modes from "./modes/modesMenu";

import useConfigAtom from "../atoms/config";

const Mode = () => {
    const { config, setMode } = useConfigAtom();
    const changeMode = ({ target }) => setMode(target.value);

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
