const createGradient = (context, canvas, floorHeight) => {
    const grad = context.createLinearGradient(canvas.width / 2, floorHeight, canvas.width / 2, canvas.height);
    grad.addColorStop(0, "#C9B170");
    grad.addColorStop(0.5, "#AE635F");
    grad.addColorStop(1, "#BD0477");
    return grad;
};

const drawLines = (context, canvas, offset, { floorHeight, amount, scaleX, scaleY }) => {
    context.filter = "blur(1px) drop-shadow(0px 0px 4px #BD0477)";
    context.lineWidth = 3;
    context.beginPath();
    for (let i = 0; i < amount; i++) {
        let pixelOffset = -4 * (i / amount) + 1;
        context.moveTo(pixelOffset + scaleX * i + scaleX * offset, floorHeight);

        let x = scaleX * i * 2 - canvas.width / 2;
        context.lineTo(pixelOffset + x + scaleX * 2 * offset, canvas.height);
    }
    context.stroke();

    context.lineWidth = 2;
    context.beginPath();
    const height = (scaleY - floorHeight / amount) * 2;
    for (let i = 0; i < amount / 2; i++) {
        context.moveTo(0, floorHeight + height * i);
        context.lineTo(canvas.width, floorHeight + height * i);
    }
    context.stroke();

    context.filter = "none";
};

const drawFloor = (context, canvas, store, frameCount) => {
    const floorHeight = store.floorHeight * canvas.height;
    const offset = (frameCount % 100) / 100;
    const scaleX = canvas.width / store.numberOfLines;
    const scaleY = canvas.height / store.numberOfLines;

    context.fillStyle = "#280A24";
    context.fillRect(0, floorHeight, canvas.width, canvas.height);

    const grad = createGradient(context, canvas, floorHeight);

    context.strokeStyle = grad;
    drawLines(context, canvas, offset, { floorHeight, amount: store.numberOfLines, scaleX, scaleY });
};

export { drawFloor };
