import React from "react";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import CanvasUpdate from "../drawing/canvasUpdate";

const Canvas = () => {
    const [width, height] = useWindowSize();
    const canvasRef = useCanvas(CanvasUpdate);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
