import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";

import { Grid, IconButton } from "@mui/material";
import { List, Divider } from "@mui/material";

import { addGradientColor } from "../../../redux/configSlice";
import ColorItem from "./colorItem";

const ColorsList = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    return (
        <Grid item mt={-1}>
            <Grid container direction="row" alignItems="center">
                <Grid item>Colors</Grid>
                <Grid item>
                    <IconButton onClick={() => dispatch(addGradientColor("black"))}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <List sx={{ width: "100%", bgcolor: "#00000050", borderRadius: 3 }}>
                {config.gradient.colors.map((color, index) => (
                    <>
                        {index !== 0 && <Divider />}
                        <ColorItem color={color} index={index}></ColorItem>
                    </>
                ))}
            </List>
        </Grid>
    );
};

export default ColorsList;
