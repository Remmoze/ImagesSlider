import React from "react";
import useWindowSize from "./windowSize";

import useCanvas from "./useCanvas";

import { createBlinking, createGradient, createRadial } from "./GradientFactory";
import { createImageSlider } from "./PatternFactory";

const canvasUpdate = (context, frameCount, config, image) => {
    const canvas = context.canvas;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "48px courier";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("No input", canvas.width / 2, canvas.height / 2);

    if (config.mode === "gradient") {
        context.fillStyle = createGradient(context, config, frameCount);
    }

    if (config.mode === "blinking") {
        context.fillStyle = createBlinking(context, config, frameCount);
    }

    if (config.mode === "radial") {
        context.fillStyle = createRadial(context, config, frameCount);
    }

    if (config.mode === "image" && image != null) {
        context.fillStyle = createImageSlider(context, image);
    }

    // 'no input' text is rendered white, so if fillStyle hasn't changed, no new style was given
    if (context.fillStyle !== "#ffffff") {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (config.debug) {
        let radius = 80;
        context.fillStyle = "#ffffffa0";
        context.beginPath();
        context.arc(
            canvas.width - radius - 10,
            canvas.height - radius - 10,
            radius * Math.sin(frameCount * 0.05) ** 2,
            0,
            2 * Math.PI
        );
        context.fill();
    }
};

const Canvas = (args) => {
    args = { ...args, ...useWindowSize() };

    const canvasRef = useCanvas(canvasUpdate);

    return <canvas ref={canvasRef} {...args} />;
};

export default Canvas;
