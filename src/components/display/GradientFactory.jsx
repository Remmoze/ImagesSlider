const MakeGradient = (context, { mode, colors, rotation, speed }, frameCount, overrideMode = "default") => {
    let canvas = context.canvas;

    //circumscribed circle around canvas rectangle
    let realRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

    //how much space one color takes up
    let colorStopWidth = (realRadius * 2) / colors.length;

    let radius = 0;

    if (overrideMode === "default") {
        overrideMode = mode;
    }

    if (overrideMode === "blinking") {
        // set circumscribed circle's radius to a color stop
        radius = realRadius * colorStopWidth;
    } else if (overrideMode === "gradient") {
        //increase circumscribed circle's radius by a color stop
        radius = realRadius + colorStopWidth;
    }

    //calculate location of points on a circle based on rotation
    let x1 = Math.cos(-rotation + Math.PI) * radius + canvas.width / 2;
    let y1 = Math.sin(-rotation + Math.PI) * radius + canvas.height / 2;
    let x2 = Math.cos(-rotation) * radius + canvas.width / 2;
    let y2 = Math.sin(-rotation) * radius + canvas.height / 2;

    let newSpeed = frameCount / speed;

    //add first color to the end to make seamless transition
    let palette = [...colors, colors[0]];

    let grad = context.createLinearGradient(x1, y1, x2, y2);
    for (let i = 0; i < palette.length; i++) {
        let coloroffset = ((i + newSpeed) % palette.length) / palette.length;
        grad.addColorStop(coloroffset, palette[i]);
    }
    return grad;
};

const createGradient = (context, config, frameCount) => {
    return MakeGradient(context, config, frameCount, "gradient");
};

const createBlinking = (context, config, frameCount) => {
    return MakeGradient(context, config, frameCount, "blinking");
};

export { createGradient, createBlinking };
