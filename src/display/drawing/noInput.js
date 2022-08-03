const drawDebug = (context, frameCount) => {
    const canvas = context.canvas;
    let radius = 80;
    context.fillStyle = "#ffffffa0";
    context.beginPath();
    context.arc(
        canvas.width - radius - 10,
        canvas.height - radius - 10,
        radius * Math.sin(frameCount * 0.05) ** 2,
        0,
        2 * Math.PI
    );
    context.fill();
};

const drawDefault = (context) => {
    const canvas = context.canvas;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "48px courier";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("No input", canvas.width / 2, canvas.height / 2);
};

export { drawDebug, drawDefault };
