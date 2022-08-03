import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton, TextField } from "@mui/material";
import { ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

// make this component not dependent on gradient
import useGradientAtom from "../../displayModes/Gradient/atom";

const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
};

const changeColor = (setColorByIndex, index, color, setError) => {
    if (!isColor(color)) {
        setError(true);
        return;
    }
    setError(false);
    setColorByIndex(index, color);
};

const ColorItem = ({ color, index, blockDelete }) => {
    const { deleteColorByIndex, setColorByIndex } = useGradientAtom();
    const [error, setError] = useState(false);

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
                    onChange={({ target }) => changeColor(setColorByIndex, index, target.value, setError)}
                    id="standard-basic"
                    variant="standard"
                    color={error ? "error" : "primary"}
                    defaultValue={color}
                />
            </ListItemText>
            <IconButton disabled={blockDelete} onClick={() => deleteColorByIndex(index)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default ColorItem;
