import React from "react";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import { createBlinking, createGradient } from "./GradientFactory";

// const useStyles = makeStyles((theme) => ({
//     canvas: {
//         display: "block",
//     },
// }));

const canvasUpdate = (context, frameCount, config) => {
    const canvas = context.canvas;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (config.mode === "gradient") {
        context.fillStyle = createGradient(context, config, frameCount);
    }

    if (config.mode === "blinking") {
        context.fillStyle = createBlinking(context, config, frameCount);
    }

    context.fillRect(0, 0, canvas.width, canvas.height);

    if (config.debug) {
        var grd = context.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            120
        );
        grd.addColorStop(0, "#ffffff50");
        grd.addColorStop(1, "#ffffffa0");

        context.fillStyle = grd;
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 100 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
        context.fill();
    }
};

const Canvas = (args) => {
    args = { ...args, ...useWindowSize() };

    const canvasRef = useCanvas(canvasUpdate);

    return <canvas ref={canvasRef} {...args} />;
};

export default Canvas;
