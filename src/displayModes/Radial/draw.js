import { getRadius, addColorStops, getSpeed } from "../../display/drawing/GradientFactory";

const getRadialGradient = (context, radius) => {
    const canvas = context.canvas;
    return context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        radius
    );
};

const createRadial = (context, radial, colors, frameCount) => {
    const canvas = context.canvas;
    const radius = getRadius(canvas, colors, "Radial");
    const gradient = getRadialGradient(context, radius);
    const speed = getSpeed(frameCount, radial.speed);

    return addColorStops(gradient, speed, colors);
};

export { createRadial };
