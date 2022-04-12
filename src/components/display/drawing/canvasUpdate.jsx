import { createGradient } from "./display modes/gradient";
import { createBlinking } from "./display modes/blinking";
import { createRadial } from "./display modes/radial";
import { createImageSlider } from "./PatternFactory";

import { updateDots } from "./display modes/dots";

const drawDebug = (context, frameCount) => {
    const canvas = context.canvas;
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
};

const drawDefault = (context) => {
    const canvas = context.canvas;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "48px courier";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("No input", canvas.width / 2, canvas.height / 2);
};

const createFillStyle = (context, storage, frameCount, image) => {
    switch (storage.config.mode) {
        case "gradient":
            return createGradient(context, storage.gradient, frameCount);
        case "blinking":
            return createBlinking(context, storage.gradient, frameCount);
        case "radial":
            return createRadial(context, storage.gradient, frameCount);
        case "image": {
            if (image !== null) return createImageSlider(context, image);
            return null;
        }
        default: {
            return null;
        }
    }
};

const getDrawType = (mode) => {
    switch (mode) {
        case "gradient":
        case "blinking":
        case "radial":
        case "image": {
            return "fillstyle";
        }

        case "dots": {
            return "update";
        }

        default: {
            return "unknown";
        }
    }
};

const drawUpdate = (context, storage) => {
    const canvas = context.canvas;
    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (storage.config.mode === "dots") {
        updateDots(context, storage.dots);
    }
};

const CanvasUpdate = (context, frameCount, storage, image) => {
    drawDefault(context);

    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        let fillStyle = createFillStyle(context, storage, frameCount, image);
        if (fillStyle !== null) {
            context.fillStyle = fillStyle;
            drawUpdate(context, storage);
        }
    }
    if (type === "update") {
        drawUpdate(context, storage);
    }

    if (storage.config.debug) {
        drawDebug(context, frameCount);
    }
};

export default CanvasUpdate;
