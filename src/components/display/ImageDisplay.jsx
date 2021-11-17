import React, { useEffect, useState } from "react";
import useWindowSize from "./windowSize";
import { Box } from "@mui/system";

import Image from "../../content/city.jpg";

const ImageDisplay = () => {
    const [winWidth, winHeight] = useWindowSize();
    const [offset, setOffset] = useState(0);

    //just a quick hack. improve later.
    useEffect(() => {
        let id = setInterval(() => {
            setOffset((offset + 1) % 1000);
        }, 10);
        return () => clearInterval(id);
    }, [offset]);

    return (
        <Box
            sx={{
                width: winWidth,
                height: winHeight,
                backgroundImage: `url(${Image})`,
                backgroundSize: "contain",
                backgroundPosition: offset + "%",
                backgroundRepeat: "repeat",
                transform: "rotate(20deg)",
            }}
        />
    );
};

export default ImageDisplay;
