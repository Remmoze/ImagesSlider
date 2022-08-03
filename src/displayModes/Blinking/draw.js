import { getRealRadius, getColorStopWidth, getSpeed, addColorStops } from "../../display/drawing/GradientFactory";

const getRadius = (canvas, colors) => {
    let realRadius = getRealRadius(canvas);
    let colorStopWidth = getColorStopWidth(realRadius, colors);
    return realRadius * colorStopWidth;
};

const getGradient = (context, radius) => {
    const canvas = context.canvas;
    const x1 = canvas.width / 2 - radius;
    const y1 = canvas.height / 2;
    const x2 = canvas.width;
    const y2 = canvas.height / 2 + radius;
    return context.createLinearGradient(x1, y1, x2, y2);
};

const createBlinkingGradient = (context, blinking, framecount) => {
    const canvas = context.canvas;
    const radius = getRadius(canvas, blinking.colors);
    const gradient = getGradient(context, radius);
    const speed = getSpeed(framecount, blinking.speed);

    return addColorStops(gradient, speed, blinking.colors);
};

const createBlinking = (context, storeBlinking, frameCount) => {
    return createBlinkingGradient(context, storeBlinking, frameCount, "Blinking");
};

export { createBlinking };
