import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setCount } from "../../../redux/dotsSlice";

const changeCount = (count, setLabelCount, dispatch) => {
    setLabelCount(count);
    dispatch(setCount(count));
};

const Count = () => {
    const dots = useSelector((storage) => storage.dots);
    const dispatch = useDispatch();
    const [labelCount, setLabelCount] = useState(dots.count);

    return (
        <>
            <Grid item>Count - {dots.count}</Grid>
            <Grid item>
                <Slider
                    onChange={(e, value) => changeCount(value, setLabelCount, dispatch)}
                    defaultValue={labelCount}
                    min={1}
                    max={250}
                    step={1}
                    value={labelCount}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default Count;
