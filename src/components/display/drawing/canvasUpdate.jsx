import { createGradient } from "./display modes/gradient";
import { createBlinking } from "./display modes/blinking";
import { createRadial } from "./display modes/radial";
import { createImageSlider } from "./PatternFactory";

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

const createFillStyle = (context, config, frameCount, image) => {
    switch (config.mode) {
        case "gradient":
            return createGradient(context, config, frameCount);
        case "blinking":
            return createBlinking(context, config, frameCount);
        case "radial":
            return createRadial(context, config, frameCount);
        case "image": {
            if (image !== null) return createImageSlider(context, image);
            return null;
        }
        default:
            return null;
    }
};

const drawUpdate = (context, config) => {
    const canvas = context.canvas;
    switch (config.mode) {
        case "gradient":
        case "blinking":
        case "radial": {
            context.fillRect(0, 0, canvas.width, canvas.height);
            break;
        }
        default:
            break;
    }

    if (config.mode === "image") {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
};

const CanvasUpdate = (context, frameCount, config, image) => {
    drawDefault(context);

    let fillStyle = createFillStyle(context, config, frameCount, image);
    if (fillStyle !== null) {
        context.fillStyle = fillStyle;
        drawUpdate(context, config);
    }

    if (config.debug) {
        drawDebug(context, frameCount);
    }
};

export default CanvasUpdate;
