import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton, TextField } from "@mui/material";
import { ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

import { deleteGradientColorByIndex, setGradientColorByIndex } from "../../../redux/configSlice";

const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
};

const changeColor = (dispatch, index, color, setError) => {
    if (!isColor(color)) {
        setError(true);
        return;
    }
    setError(false);
    dispatch(setGradientColorByIndex({ index, color }));
};

const ColorItem = ({ color, index }) => {
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    return (
        <ListItem disablePadding>
            <Box
                ml={1}
                mr={1}
                sx={{
                    width: 70,
                    height: 25,
                    backgroundColor: color,
                    border: 2,
                    borderColor: "#aaaaaa",
                    borderRadius: 2,
                    "&:hover": {
                        backgroundColor: color,
                        opacity: [0.8, 0.8, 0.8],
                    },
                }}
            />

            <ListItemText>
                <TextField
                    onChange={({ target }) => changeColor(dispatch, index, target.value, setError)}
                    id="standard-basic"
                    variant="standard"
                    color={error ? "error" : "primary"}
                    defaultValue={color}
                />
            </ListItemText>
            <IconButton
                onClick={() => {
                    dispatch(deleteGradientColorByIndex(index));
                }}
            >
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default ColorItem;
