import { createGradient } from "./display modes/gradient";
import { createBlinking } from "./display modes/blinking";
import { createRadial } from "./display modes/radial";
import { updateDots } from "./display modes/dots";
import { updateImage } from "./display modes/image";

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
        case "Gradient":
            return createGradient(context, storage.gradient, frameCount);
        case "Blinking":
            return createBlinking(context, storage.gradient, frameCount);
        case "Radial":
            return createRadial(context, storage.gradient, frameCount);
        default: {
            return null;
        }
    }
};

const getDrawType = (mode) => {
    switch (mode) {
        case "Gradient":
        case "Blinking":
        case "Radial": {
            return "fillstyle";
        }

        case "Image": {
            return "pattern";
        }

        case "Dots": {
            return "update";
        }

        default: {
            return "unknown";
        }
    }
};

const drawUpdate = (context, storage, needsUpdate = false) => {
    const canvas = context.canvas;
    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (storage.config.mode === "Dots") {
        updateDots(context, storage.dots, needsUpdate);
    }

    if (storage.config.mode === "Image") {
        updateImage(context, storage.image);
    }
};

let prevDimensions = { width: 0, height: 0 };
const CanvasUpdate = (context, frameCount, storage, image) => {
    let needsUpdate = context.canvas.width !== prevDimensions.width || context.canvas.height !== prevDimensions.height;
    if (needsUpdate) {
        prevDimensions.width = context.canvas.width;
        prevDimensions.height = context.canvas.height;
    }
    drawDefault(context);

    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        let fillStyle = createFillStyle(context, storage, frameCount, image);
        if (fillStyle !== null) {
            context.fillStyle = fillStyle;
            drawUpdate(context, storage);
        }
    } else if (type === "update") {
        drawUpdate(context, storage, needsUpdate);
    } else if (type === "pattern") {
        drawUpdate(context, storage);
    }

    if (storage.config.debug) {
        drawDebug(context, frameCount);
    }
};

export default CanvasUpdate;
