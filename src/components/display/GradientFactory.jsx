const MakeGradient = (context, rotation, colors, frameCount, mode = "gradient") => {
    let canvas = context.canvas;

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

    //calculate location of points on a circle based on rotation
    let x1 = Math.cos(rotation) * radius + canvas.width / 2;
    let y1 = Math.sin(rotation) * radius + canvas.height / 2;
    let x2 = Math.cos(rotation + Math.PI) * radius + canvas.width / 2;
    let y2 = Math.sin(rotation + Math.PI) * radius + canvas.height / 2;

    let speed = frameCount / 100;

    //add first color to the end to make seamless transition
    let palette = [...colors, colors[0]];

    let gradient = context.createLinearGradient(x1, y1, x2, y2);
    for (let i = 0; i < palette.length; i++) {
        let coloroffset = ((i + speed) % palette.length) / palette.length;
        gradient.addColorStop(coloroffset, palette[i]);
    }
    return gradient;
};

const createGradient = (context, rotation, colors, frameCount) => {
    return MakeGradient(context, rotation, colors, frameCount, "gradient");
};

const createBlinking = (context, rotation, colors, frameCount) => {
    return MakeGradient(context, rotation, colors, frameCount, "blinking");
};

export { createGradient, createBlinking };
