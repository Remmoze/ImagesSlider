import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import { createBlinking, createGradient } from "./GradientFactory";

const useStyles = makeStyles((theme) => ({
    canvas: {
        display: "block",
    },
}));

const canvasUpdate = (context, frameCount, config) => {
    const canvas = context.canvas;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (config.mode === "gradient") {
        if (config.gradient.mode === "gradient") {
            context.fillStyle = createGradient(context, config.gradient.rotation, config.gradient.colors, frameCount);
        }

        if (config.gradient.mode === "blinking") {
            context.fillStyle = createBlinking(context, config.gradient.rotation, config.gradient.colors, frameCount);
        }
    }

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "white";
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 100 * Math.sin(frameCount * 0.05) ** 2 + 10, 0, 2 * Math.PI);
    context.fill();
};

const Canvas = (args) => {
    const { canvasStyle } = useStyles();
    args = { ...args, ...useWindowSize() };

    const canvasRef = useCanvas(canvasUpdate);

    return <canvas className={canvasStyle} ref={canvasRef} {...args} />;
};

export default Canvas;
