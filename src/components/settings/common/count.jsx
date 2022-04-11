import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setCount } from "../../../redux/configSlice";

const changeCount = (count, setLabelCount, dispatch) => {
    setLabelCount(count);
    dispatch(setCount(count));
};

const Count = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    const [count, setCount] = useState(config.dotsCount);
    return (
        <>
            <Grid item>Count - {config.dotsCount}</Grid>
            <Grid item>
                <Slider
                    onChange={(e, value) => changeCount(value, setCount, dispatch)}
                    defaultValue={count}
                    min={1}
                    max={250}
                    step={1}
                    value={count}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default Count;
