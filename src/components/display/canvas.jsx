import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import MakeGradient from "./GradientFactory";

const useStyles = makeStyles((theme) => ({
    canvas: {
        display: "block",
    },
}));

let lala = 0;

const canvasUpdate = (context, frameCount, config) => {
    const canvas = context.canvas;
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // if (config && config.image != null) {
    //     context.drawImage(config.image, 0, 0);
    // }

    context.fillStyle = MakeGradient(context, 0, ["red", "green"], frameCount);

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
