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

const createRadial = (context, storage, frameCount) => {
    const canvas = context.canvas;
    const radius = getRadius(canvas, storage.colors, "Radial");
    const gradient = getRadialGradient(context, radius);
    const speed = getSpeed(frameCount, storage.radial.speed);

    return addColorStops(gradient, speed, storage.colors);
};

const updateRadial = (context, storage, frameCount) => {
    context.fillStyle = createRadial(context, storage, frameCount);
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

export { updateRadial };
