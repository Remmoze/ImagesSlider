import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";

import useWindowSize from "./windowSize";
import useTimer from "./useTimer";

import Image from "../../../content/city.jpg";

const ImageDisplay = () => {
    const speed = useSelector((storage) => storage.gradient.speed);
    const [winWidth, winHeight] = useWindowSize();
    const [offset, setOffset] = useState(0);

    useTimer((dt) => {
        setOffset((prev) => {
            return prev + speed / 500;
        });
    });

    return (
        <Box
            sx={{
                width: winWidth,
                height: winHeight,
                backgroundImage: `url(${Image})`,
                backgroundSize: "contain",
                backgroundPosition: offset + "%",
                backgroundRepeat: "repeat",
                //transform: "rotate(20deg)",
            }}
        />
    );
};

export default ImageDisplay;
