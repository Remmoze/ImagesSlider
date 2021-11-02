import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: 10,
        left: 5,
        width: "100%",
        height: "100%",

        maxWidth: 350,
        maxHeight: 500,

        backgroundColor: "#000000a0",
    },
}));

const SettingsContainer = () => {
    const classes = useStyles();
    return <Box className={classes.root}></Box>;
};

export default SettingsContainer;
