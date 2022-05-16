import { drawFloor } from "./Synthwave/floor";

const drawBackground = (context, canvas) => {
    const grad = context.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height);
    grad.addColorStop(0, "black");
    grad.addColorStop(0.05, "#100284");
    grad.addColorStop(0.1, "#1103AD");
    grad.addColorStop(0.4, "#370CBC");
    grad.addColorStop(0.5, "#4B11C4");
    grad.addColorStop(0.7, "#841EDA");
    context.fillStyle = grad;
    context.fillRect(0, 0, canvas.width, canvas.height);
};

const updateSynth = (context, store, frameCount) => {
    drawBackground(context, context.canvas);
    drawFloor(context, context.canvas, store, frameCount);
};

export { updateSynth };
