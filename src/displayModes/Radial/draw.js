import { getRadius, addColorStops, getSpeed } from "../../display/drawing/GradientFactory";

const getRadialGradient = (context, radius) => {
    let canvas = context.canvas;
    return context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        radius
    );
};

const createRadial = (context, storeGradient, frameCount) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, storeGradient.colors, "Radial");
    const gradient = getRadialGradient(context, radius);

    return addColorStops(gradient, getSpeed(frameCount, storeGradient.speed), storeGradient.colors);
};

export { createRadial };
