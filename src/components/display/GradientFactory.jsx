const getRadius = (canvas, colors, mode) => {
    //circumscribed circle around canvas rectangle
    let realRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

    //how much space one color takes up
    let colorStopWidth = (realRadius * 2) / colors.length;

    let radius = 0;
    if (mode === "blinking") {
        // set circumscribed circle's radius to a color stop
        radius = realRadius * colorStopWidth;
    } else if (mode === "gradient") {
        //increase circumscribed circle's radius by a color stop
        radius = realRadius + colorStopWidth;
    }

    return radius;
};

const getContextGradient = (context, rotation, radius) => {
    //calculate location of points on a circle based on rotation
    let x1 = Math.cos(-rotation + Math.PI) * radius + context.canvas.width / 2;
    let y1 = Math.sin(-rotation + Math.PI) * radius + context.canvas.height / 2;
    let x2 = Math.cos(-rotation) * radius + context.canvas.width / 2;
    let y2 = Math.sin(-rotation) * radius + context.canvas.height / 2;

    return context.createLinearGradient(x1, y1, x2, y2);
};

const getSpeed = (frameCount, speed) => frameCount / speed;

const MakeGradient = (gradient, speed, colors) => {
    for (let i = 0; i < colors.length; i++) {
        let coloroffset = ((i + speed) % colors.length) / colors.length;
        gradient.addColorStop(coloroffset, colors[i]);
    }
    return gradient;
};

const createGradientType = (context, config, frameCount, mode) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, config.colors, mode);
    const gradient = getContextGradient(context, config.rotation, radius);

    return MakeGradient(gradient, getSpeed(frameCount, config.speed), config.colors);
};

//Have to fix: Transition between colors is flickering when there are only few colors
const createGradient = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "gradient");
};

const createBlinking = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "blinking");
};

export { createGradient, createBlinking };
