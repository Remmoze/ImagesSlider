import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { Grid, IconButton, Typography } from "@mui/material";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Box } from "@mui/system";

import { deleteGradientColorByIndex } from "../../../redux/configSlice";

const generateColorsList = (config, dispatch) => {
    return (
        <>
            {config.gradient.colors.map((color, index) => (
                <>
                    {index !== 0 && <Divider />}
                    <ListItem disablePadding>
                        <Box
                            ml={1}
                            sx={{
                                width: 70,
                                height: 25,
                                backgroundColor: color,
                                border: 2,
                                borderColor: "#aaaaaa",
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: color,
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        />

                        <ListItemText>
                            <Typography ml={1}>{color}</Typography>
                        </ListItemText>
                        <IconButton
                            onClick={() => {
                                dispatch(deleteGradientColorByIndex(index));
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                </>
            ))}
        </>
    );
};

const ColorsList = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    return (
        <Grid item mt={-1}>
            <Grid container direction="row" alignItems="center">
                <Grid item>Colors</Grid>
                <Grid item>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <List sx={{ width: "100%", bgcolor: "#00000050", borderRadius: 3 }}>
                {generateColorsList(config, dispatch)}
            </List>
        </Grid>
    );
};

export default ColorsList;
