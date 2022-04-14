import React, { useState } from "react";

import { Grid, Slider } from "@mui/material";

const SettingsSlider = ({ defaultValue, label, onChange, min, max, step, color }) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <>
            <Grid item>{label}</Grid>
            <Grid item>
                <Slider
                    sx={{ color }}
                    onChange={(e, value) => {
                        setValue(value);
                        onChange(value);
                    }}
                    defaultValue={value}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default SettingsSlider;
