import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { setGradientMode } from "../../../redux/configSlice";

import Rotation from "./rotation";
import Speed from "./speed";
import ColorsList from "./colorsAdder";

const Mode = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    let children;
    if (config.gradient.mode === "blinking") {
        children = <Speed />;
    } else if (config.gradient.mode === "gradient") {
        children = (
            <>
                <Speed /> <Rotation />
            </>
        );
    }

    return (
        <>
            <Grid item mb={1}>
                <FormControl fullWidth>
                    <InputLabel>Gradient mode</InputLabel>
                    <Select
                        value={config.gradient.mode}
                        label="Gradient mode"
                        onChange={({ target }) => dispatch(setGradientMode(target.value))}
                    >
                        <MenuItem value={"gradient"}>Gradient</MenuItem>
                        <MenuItem value={"blinking"}>Blinking</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {children}
            <ColorsList />
        </>
    );
};

export default Mode;
