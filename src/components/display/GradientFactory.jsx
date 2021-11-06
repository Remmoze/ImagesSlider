const getRealRadius = (canvas) => {
    return Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;
};

const getColorStopWidth = (radius, colors) => {
    return (radius * 2) / colors.length;
};

const getRadius = (canvas, colors, mode) => {
    //circumscribed circle around canvas rectangle
    let realRadius = getRealRadius(canvas);

    //how much space one color takes up
    let colorStopWidth = getColorStopWidth(realRadius, colors);

    let radius = 0;
    if (mode === "blinking") {
        // set circumscribed circle's radius to a color stop
        radius = realRadius * colorStopWidth;
    } else if (mode === "gradient" || mode === "radial") {
        //increase circumscribed circle's radius by a color stop
        radius = realRadius + colorStopWidth;
    }

    return radius;
};

const getLinearGradient = (context, rotation, radius) => {
    let canvas = context.canvas;
    //calculate location of points on a circle based on rotation
    let x1 = Math.cos(-rotation + Math.PI) * radius + canvas.width / 2;
    let y1 = Math.sin(-rotation + Math.PI) * radius + canvas.height / 2;
    let x2 = Math.cos(-rotation) * radius + canvas.width / 2;
    let y2 = Math.sin(-rotation) * radius + canvas.height / 2;

    return context.createLinearGradient(x1, y1, x2, y2);
};

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

/* ------------------------------ */

const getSpeed = (frameCount, speed) => frameCount / speed;

/* BROKEN
const addColorStops = (gradient, speed, colors) => {
    let minOffset = 1;
    let baseColorIndex = null;

    for (let i = 0; i < colors.length; i++) {
        let colorOffset = ((i + speed) % colors.length) / colors.length;

        if (colorOffset < minOffset) {
            minOffset = colorOffset;
            baseColorIndex = i;
        }

        gradient.addColorStop(colorOffset, colors[i]);
    }
    if (baseColorIndex + speed > 0.001) {
        let baseIndex = (baseColorIndex - 1 + colors.length) % colors.length;
        gradient.addColorStop(0, colors[baseIndex]);
    }
    return gradient;
};
*/

const addColorStops = (gradient, speed, colors) => {
    for (let i = 0; i < colors.length; i++) {
        let colorOffset = ((i + speed) % colors.length) / colors.length;
        gradient.addColorStop(colorOffset, colors[i]);
    }
    return gradient;
};

/* ------------------------------ */

const createGradientType = (context, config, frameCount, mode) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, config.colors, mode);
    const gradient = getLinearGradient(context, config.rotation, radius);

    return addColorStops(gradient, getSpeed(frameCount, config.speed), config.colors);
};

//Have to fix: Transition between colors is flickering when there are only few colors
const createGradient = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "gradient");
};

const createBlinking = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "blinking");
};

const createRadial = (context, config, frameCount) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, config.colors, "radial");
    const gradient = getRadialGradient(context, radius);

    return addColorStops(gradient, getSpeed(frameCount, config.speed), config.colors);
};

export { createGradient, createBlinking, createRadial };
