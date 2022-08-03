import { createBlinking } from "../../displayModes/Blinking/draw";
import { updateDots } from "../../displayModes/Dots/draw";
import { createGradient } from "../../displayModes/Gradient/draw";
import { updateImage } from "../../displayModes/Image/draw";
import { updateParticles } from "../../displayModes/Particles/draw";
import { createRadial } from "../../displayModes/Radial/draw";
import { updateSynth } from "../../displayModes/Synthwave/draw";

/*

    Refactor this so each component has it's own way to draw content.

*/

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

const createFillStyle = (context, storage, frameCount) => {
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

        case "Dots":
        case "Synthwave":
        case "Particles": {
            return "update";
        }

        default: {
            return "unknown";
        }
    }
};

const drawUpdate = (context, storage, frameCount, needsUpdate = false) => {
    const canvas = context.canvas;
    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    switch (storage.config.mode) {
        case "Dots": {
            updateDots(context, storage.dots, needsUpdate);
            break;
        }
        case "Image": {
            updateImage(context, storage.image);
            break;
        }
        case "Synthwave": {
            updateSynth(context, storage.synth, frameCount);
            break;
        }
        case "Particles": {
            updateParticles(context, storage.particles);
            break;
        }
        default: {
            break;
        }
    }
};

let prevMode = "";
let prevDimensions = { width: 0, height: 0 };
const CanvasUpdate = (context, frameCount, storage) => {
    if (prevMode !== storage.config.mode) {
        prevMode = storage.config.mode;
        // this is absolutely retarded, but without this code, drawing slows down to 10fps
        let temp = context.canvas.width;
        context.canvas.width = 0;
        context.canvas.width = temp;
    }
    let needsUpdate = context.canvas.width !== prevDimensions.width || context.canvas.height !== prevDimensions.height;
    if (needsUpdate) {
        prevDimensions.width = context.canvas.width;
        prevDimensions.height = context.canvas.height;
    }

    drawDefault(context);

    const type = getDrawType(storage.config.mode);
    if (type === "fillstyle") {
        let fillStyle = createFillStyle(context, storage, frameCount);
        if (fillStyle !== null) {
            context.fillStyle = fillStyle;
            drawUpdate(context, storage);
        }
    } else if (type === "update") {
        drawUpdate(context, storage, frameCount, needsUpdate);
    } else if (type === "pattern") {
        drawUpdate(context, storage);
    }

    if (storage.config.debug) {
        drawDebug(context, frameCount);
    }
};

export default CanvasUpdate;
