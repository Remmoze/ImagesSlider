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
    grad.addColorStop(0.3, "#F683A4");
    grad.addColorStop(0.5, "#F683A4");
    grad.addColorStop(0.7, "#FEF9D3");
    grad.addColorStop(1, "#FEF9D3");
    return grad;
};

const drawSun = (context, canvas, sunBox) => {
    context.filter = "blur(1px) drop-shadow(1px 1px 3px #F683A4)";
    context.fillStyle = getSunGradient(context, sunBox);
    context.beginPath();
    context.arc(sunBox.x + sunBox.width / 2, sunBox.y + sunBox.height / 2, sunBox.width / 2, 0, Math.PI * 2);
    context.fill();
    context.filter = "none";
};

const drawBackground = (context, canvas, store, frameCount) => {
    const grad = getBGGradient(context, canvas);
    context.fillStyle = grad;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const sunBox = getSunBox(canvas, store.floorHeight);
    drawSun(context, canvas, sunBox);
};

export { drawBackground };
