import React, { useState } from "react";
import useWindowSize from "./windowSize";
import { Box } from "@mui/system";

import Image from "../../content/city.jpg";
import { useSelector } from "react-redux";
import useTimer from "./useTimer";

const ImageDisplay = () => {
    const speed = useSelector((storage) => storage.config.speed);
    const [winWidth, winHeight] = useWindowSize();
    const [offset, setOffset] = useState(0);

    useTimer((dt) => {
        setOffset((prev) => {
            console.log(speed);
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
