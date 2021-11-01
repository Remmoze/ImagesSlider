const MakeGradient = (context, rotation, colors, frameCount) => {
    let canvas = context.canvas;

    //circumscribed circle around canvas rectangle
    let realRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

    //how much space one color takes up
    let colorStopWidth = (realRadius * 2) / colors.length;

    //increase circumscribed circle's radius by 2 color stops
    let radius = realRadius + 2 * colorStopWidth;

    //calculate location of points on a circle based on rotation
    let x1 = Math.cos(rotation) * radius + canvas.width / 2;
    let y1 = Math.sin(rotation) * radius + canvas.height / 2;
    let x2 = Math.cos(rotation + Math.PI) * radius + canvas.width / 2;
    let y2 = Math.sin(rotation + Math.PI) * radius + canvas.height / 2;

    let speed = frameCount / 100;

    //add colors in front and back to make seamless transition
    let firstColor = colors[0];
    let lastColor = colors[colors.length - 1];
    colors.unshift(lastColor);
    colors.push(firstColor);

    let gradient = context.createLinearGradient(x1, y1, x2, y2);
    for (let i = 0; i < colors.length; i++) {
        let coloroffset = ((i + speed) % colors.length) / colors.length;
        gradient.addColorStop(coloroffset, colors[i]);
    }
    return gradient;
};

export default MakeGradient;
