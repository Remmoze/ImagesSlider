import React from "react";
import { useSelector } from "react-redux";

import Canvas from "./Canvas";
import ImageDisplay from "./ImageDisplay";

const Display = () => {
    const mode = useSelector((storage) => storage.config.mode);
    if (mode === "Image") return <ImageDisplay />;
    return <Canvas />;
};

export default Display;
