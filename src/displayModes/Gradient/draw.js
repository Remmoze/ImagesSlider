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
const createGradient = (context, storeGradient, frameCount) => {
    const canvas = context.canvas;
    const radius = getRadius(canvas, storeGradient.colors);
    const gradient = getLinearGradient(context, storeGradient.rotation, radius);
    const speed = getSpeed(frameCount, storeGradient.speed);

    return addColorStops(gradient, speed, storeGradient.colors);
};

export { createGradient };
