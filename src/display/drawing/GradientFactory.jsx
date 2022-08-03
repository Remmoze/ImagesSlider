const getRealRadius = (canvas) => Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

const getColorStopWidth = (radius, colors) => (radius * 2) / colors.length;

const getSpeed = (frameCount, speed) => (frameCount / speed) * 1.5;

const getRadius = (canvas, colors) => {
    //circumscribed circle around canvas rectangle
    const realRadius = getRealRadius(canvas);

    //how much space one color takes up
    const colorStopWidth = getColorStopWidth(realRadius, colors);

    return realRadius + colorStopWidth;
};

const addColorStops = (gradient, speed, colors) => {
    for (let i = 0; i < colors.length; i++) {
        const colorOffset = ((i + speed) % colors.length) / colors.length;
        gradient.addColorStop(colorOffset, colors[i]);
    }
    return gradient;
};

export { getRealRadius, getColorStopWidth, getSpeed, addColorStops, getRadius };
