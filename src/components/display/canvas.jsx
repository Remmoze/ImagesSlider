import React from "react";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import CanvasUpdate from "./canvasUpdate";

const Canvas = (args) => {
    args = { ...args, ...useWindowSize() };

    const canvasRef = useCanvas(CanvasUpdate);

    return <canvas ref={canvasRef} {...args} />;
};

export default Canvas;
