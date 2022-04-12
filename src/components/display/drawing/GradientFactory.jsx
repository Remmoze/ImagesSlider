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
const getSpeed = (frameCount, speed) => frameCount / speed;

const addColorStops = (gradient, speed, colors) => {
    for (let i = 0; i < colors.length; i++) {
        let colorOffset = ((i + speed) % colors.length) / colors.length;
        gradient.addColorStop(colorOffset, colors[i]);
    }
    return gradient;
};

const createGradientType = (context, storeGradient, frameCount, mode) => {
    let canvas = context.canvas;
    const radius = getRadius(canvas, storeGradient.colors, mode);
    const gradient = getLinearGradient(context, storeGradient.rotation, radius);

    return addColorStops(gradient, getSpeed(frameCount, storeGradient.speed), storeGradient.colors);
};

export { createGradientType, addColorStops, getSpeed, getRadius };

/* ------------------------------ */

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

/* ------------------------------ */
