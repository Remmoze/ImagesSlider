import React from "react";
import { TransitionGroup } from "react-transition-group";

import AddIcon from "@mui/icons-material/Add";

import { Grid, IconButton } from "@mui/material";
import { List, Divider } from "@mui/material";
import { Collapse } from "@mui/material";

import ColorItem from "./colorItem";

// make this component not dependent on gradient
import useGradientAtom from "../../displayModes/Gradient/atom";

const RandomColor = () => {
    return (
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .toUpperCase()
    );
};

const ColorsList = () => {
    const { gradient, addColor } = useGradientAtom();

    return (
        <Grid item mt={-1}>
            <Grid container direction="row" alignItems="center">
                <Grid item>Colors</Grid>
                <Grid item>
                    <IconButton disabled={gradient.colors.length >= 9} onClick={() => addColor(RandomColor())}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <List sx={{ width: "100%", bgcolor: "#00000050", borderRadius: 3 }}>
                <TransitionGroup>
                    {gradient.colors.map((color, index) => (
                        <Collapse key={color}>
                            {index !== 0 && <Divider />}
                            <ColorItem blockDelete={gradient.colors.length < 2} color={color} index={index}></ColorItem>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Grid>
    );
};

export default ColorsList;
