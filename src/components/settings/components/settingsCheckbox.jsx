import React, { useState } from "react";
import { Checkbox, Grid } from "@mui/material";

const SettingsCheckbox = ({ defaultValue, label, onChange }) => {
    const [checked, setChecked] = useState(defaultValue);
    return (
        <Grid item>
            <Checkbox
                checked={checked}
                onChange={(e, value) => {
                    setChecked(value);
                    onChange(value);
                }}
            />
            {label}
        </Grid>
    );
};

export default SettingsCheckbox;
