import React, { useState } from "react";

import { Checkbox, Grid, Typography } from "@mui/material";

const SettingsCheckbox = ({ defaultValue, label, onChange }) => {
    const [checked, setChecked] = useState(defaultValue);
    return (
        <Grid mt={-1} ml={-1.5} item>
            <Checkbox
                checked={checked}
                onChange={(e, value) => {
                    setChecked(value);
                    onChange(value);
                }}
            />
            <Typography mt={1} sx={{ display: "inline" }}>
                {label}
            </Typography>
        </Grid>
    );
};

export default SettingsCheckbox;
