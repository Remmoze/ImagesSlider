import { getRadius, addColorStops, getSpeed } from "../../display/drawing/GradientFactory";

const getLinearGradient = (context, rotation, radius) => {
    const canvas = context.canvas;
    //calculate location of points on a circle based on rotation
    const x1 = Math.cos(-rotation + Math.PI) * radius + canvas.width / 2;
    const y1 = Math.sin(-rotation + Math.PI) * radius + canvas.height / 2;
    const x2 = Math.cos(-rotation) * radius + canvas.width / 2;
    const y2 = Math.sin(-rotation) * radius + canvas.height / 2;

    return context.createLinearGradient(x1, y1, x2, y2);
};

//fix: Transition between colors is flickering when there are only few colors
const createGradient = (context, storage, frameCount) => {
    const canvas = context.canvas;
    const radius = getRadius(canvas, storage.colors);
    const gradient = getLinearGradient(context, storage.gradient.rotation, radius);
    const speed = getSpeed(frameCount, storage.gradient.speed);

    return addColorStops(gradient, speed, storage.colors);
};

const updateGradient = (context, storage, frameCount) => {
    context.fillStyle = createGradient(context, storage, frameCount);
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

export { updateGradient };
