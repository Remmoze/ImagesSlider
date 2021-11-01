import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: 10,
        left: 5,
        width: 150,
        height: 400,
    },
}));

const SettingsContainer = () => {
    const classes = useStyles();
    return <Box className={classes.root}></Box>;
};

export default SettingsContainer;
