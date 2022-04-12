import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Grid, Slider } from "@mui/material";

import { setShowDots } from "../../../redux/configSlice";

const changeShow = (show, setShow, dispatch) => {
    setShow(show);
    console.log(setShowDots(show));
    dispatch({ type: "config/setShowDots", payload: show });
    //dispatch(setShowDots(show));
};

const ShowDots = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    const [show, setShow] = useState(config.showDots);
    return (
        <>
            <Grid item>
                <Checkbox checked={show} onChange={(e, value) => changeShow(value, setShow, dispatch)}></Checkbox>
                Show dots
            </Grid>
        </>
    );
};

export default ShowDots;
