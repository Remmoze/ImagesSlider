import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Grid } from "@mui/material";

import { setShowDots } from "../../../redux/dotsSlice";

const changeShow = (show, setShow, dispatch) => {
    setShow(show);
    dispatch(setShowDots(show));
};

const ShowDots = () => {
    const dots = useSelector((storage) => storage.dots);
    const dispatch = useDispatch();
    const [show, setShow] = useState(dots.showDots);
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
