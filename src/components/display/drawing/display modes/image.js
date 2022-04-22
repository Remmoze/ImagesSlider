let pattern = null;
const updatePattern = (context, { repeatX, repeatY }) => {
    let repeat = "";
    if (repeatX && repeatY) {
        repeat = "repeat";
    } else if (repeatX) {
        repeat = "repeat-x";
    } else if (repeatY) {
        repeat = "repeat-y";
    }
    pattern = context.createPattern(pattern, repeat);
};

let image = new Image();

const draw = (context) => {
    context.fillStyle = pattern;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

let prevURL = "";
const updateImage = (context, imageStorage) => {
    if (imageStorage.imageUrl !== prevURL) {
        // code
        image = new Image(); // could be removed?
        image.onload = () => {
            updatePattern(context, imageStorage);
        };
        image.src = imageStorage.imageUrl;
        prevURL = imageStorage.imageUrl;
    }

    if (pattern !== null) {
        draw(context);
    }
};

export { updateImage };
