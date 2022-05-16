const createGradient = (context, canvas, floorHeight) => {
    const grad = context.createLinearGradient(canvas.width / 2, floorHeight, canvas.width / 2, canvas.height);
    grad.addColorStop(0, "#C9B170");
    grad.addColorStop(0.5, "#AE635F");
    grad.addColorStop(1, "#BD0477");
    return grad;
};

const drawLines = (context, canvas, floorHeight, amount, offset) => {
    const scale = 2;

    context.filter = "blur(1px) drop-shadow(1px 1px 3px #BD0477)";
    context.lineWidth = 3;
    context.beginPath();
    const width = canvas.width / (amount - 1);
    for (let i = 0; i < amount; i++) {
        let pixelOffset = -4 * (i / amount) + 1;
        context.moveTo(pixelOffset + width * i + width * offset, floorHeight);

        // fix this so scale can be changed
        let x = width * i * scale - canvas.width / scale;
        context.lineTo(pixelOffset + x + width * scale * offset, canvas.height);
    }
    context.stroke();

    context.lineWidth = 2;
    context.beginPath();
    const height = ((canvas.height - floorHeight) / (amount - 1)) * 2;
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

    context.fillStyle = "#280A24";
    context.fillRect(0, floorHeight, canvas.width, canvas.height);

    const grad = createGradient(context, canvas, floorHeight);

    context.strokeStyle = grad;
    drawLines(context, canvas, floorHeight, store.numberOfLines, offset);
};

export { drawFloor };
