const draw = (context) => {
    const canvas = context.canvas;
    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);
};

const updateParticles = (context, { imageUrl, ...Storage }) => {
    draw(context);
};

export { updateParticles };
