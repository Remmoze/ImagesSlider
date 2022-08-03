import React from "react";

import { Checkbox, Grid, Typography } from "@mui/material";

const SettingsCheckbox = ({ defaultValue, label, onChange }) => {
    return (
        <Grid mt={-1} ml={-1.5} item>
            <Checkbox checked={defaultValue} onChange={(e, value) => onChange(value)} />
            <Typography mt={1} sx={{ display: "inline" }}>
                {label}
            </Typography>
        </Grid>
    );
};

export default SettingsCheckbox;
