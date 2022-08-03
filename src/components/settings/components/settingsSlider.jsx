import React from "react";

import { Grid, Slider } from "@mui/material";

const SettingsSlider = ({ value, label, onChange, min, max, step, color }) => {
    return (
        <>
            <Grid item>{label}</Grid>
            <Grid item>
                <Slider
                    sx={{ color }}
                    onChange={(_, value) => onChange(value)}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default SettingsSlider;
