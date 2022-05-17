const getBGGradient = (context, canvas) => {
    const grad = context.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height);
    grad.addColorStop(0, "black");
    grad.addColorStop(0.05, "#100284");
    grad.addColorStop(0.1, "#1103AD");
    grad.addColorStop(0.4, "#370CBC");
    grad.addColorStop(0.5, "#4B11C4");
    grad.addColorStop(0.7, "#841EDA");
    return grad;
};

const getSunBox = (canvas, floorHeight) => {
    const sunSize = canvas.width / 4;
    return {
        x: canvas.width / 2 - sunSize / 2,
        y: floorHeight * (canvas.height - sunSize * 0.2) - sunSize / 2,
        width: sunSize,
        height: sunSize,
    };
};

const getSunGradient = (context, sunBox) => {
    const grad = context.createLinearGradient(
        sunBox.x + sunBox.width / 2,
        sunBox.y,
        sunBox.x + sunBox.width / 2,
        sunBox.y + sunBox.height
    );
    grad.addColorStop(0, "#EC07A8");
    grad.addColorStop(0.2, "#F683A4");
    grad.addColorStop(0.4, "#F683A4");
    grad.addColorStop(0.7, "#FEF9D3");
    grad.addColorStop(1, "#FEF9D3");
    return grad;
};
const getSunHazeGradient = (context, sunBox, alpha = "A0") => {
    const grad = context.createLinearGradient(
        sunBox.x + sunBox.width / 2,
        sunBox.y,
        sunBox.x + sunBox.width / 2,
        sunBox.y + sunBox.height
    );
    grad.addColorStop(0, "#A9071F" + alpha);
    grad.addColorStop(0.2, "#C81023" + alpha);
    grad.addColorStop(0.4, "#CF002F" + alpha);
    grad.addColorStop(0.7, "#E80358" + alpha);
    grad.addColorStop(1, "#D2065D" + alpha);
    return grad;
};

const drawSun = (context, sunBox) => {
    context.filter = "blur(3px)";
    context.fillStyle = getSunGradient(context, sunBox);
    context.beginPath();
    context.arc(sunBox.x + sunBox.width / 2, sunBox.y + sunBox.height / 2, sunBox.width / 2, 0, Math.PI * 2);
    context.fill();
    context.filter = "none";
};

const drawSunLines = (context, sunBox, frameCount) => {
    context.filter = "blur(1px)";
    const maxLineGap = 30;
    const offset = (frameCount % 100) / 100;
    const gaps = 20;

    for (let i = 0; i < gaps; i++) {
        let y = i * maxLineGap + offset * maxLineGap;
        let height = (y / sunBox.height) ** 2 * maxLineGap;
        context.fillRect(sunBox.x - 10, sunBox.y + 10 + y, sunBox.width + 20, height);
    }
    context.filter = "none";
};

const drawSunHaze = (context, sunBox) => {
    const alpha = "80";
    context.globalCompositeOperation = "hard-light";
    context.filter = "blur(100px)";
    context.fillStyle = getSunHazeGradient(context, sunBox, alpha);
    context.beginPath();
    context.arc(sunBox.x + sunBox.width / 2, sunBox.y + sunBox.height / 2, sunBox.width / 2, 0, Math.PI * 2);
    context.fill();
    context.filter = "none";
    context.globalCompositeOperation = "source-over";
};

const drawBackground = (context, canvas, store, frameCount) => {
    const grad = getBGGradient(context, canvas);
    context.fillStyle = grad;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const sunBox = getSunBox(canvas, store.floorHeight);
    drawSun(context, sunBox);
    context.fillStyle = grad;
    drawSunLines(context, sunBox, frameCount);
    drawSunHaze(context, sunBox);
};

export { drawBackground };
