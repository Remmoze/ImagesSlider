import { getRadius, addColorStops, getSpeed } from "../GradientFactory";

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

const createRadial = (context, config, frameCount) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, config.colors, "radial");
    const gradient = getRadialGradient(context, radius);

    return addColorStops(gradient, getSpeed(frameCount, config.speed), config.colors);
};

export { createRadial };
