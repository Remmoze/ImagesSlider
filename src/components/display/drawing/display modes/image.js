let pattern = null;
const updatePattern = (context, image, { repeatX, repeatY }) => {
    let repeat = "no-repeat";
    if (repeatX && repeatY) {
        repeat = "repeat";
    } else if (repeatX) {
        repeat = "repeat-x";
    } else if (repeatY) {
        repeat = "repeat-y";
    }
    console.log("new pattern", repeat);
    pattern = context.createPattern(image, repeat);
};

let image = new Image();

const draw = (context) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = pattern;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

let prevURL = "";
let prevX = true;
let prevY = true;
const updateImage = (context, { imageUrl, repeatX, repeatY }) => {
    if (imageUrl !== prevURL) {
        console.log("was here", imageUrl);
        // code
        image = new Image(); // could be removed?
        image.onload = () => {
            updatePattern(context, image, { repeatX, repeatY });
        };
        image.src = imageUrl;
        prevURL = imageUrl;
    }

    if (repeatX !== prevX || repeatY !== prevY) {
        prevX = repeatX;
        prevY = repeatY;
        updatePattern(context, image, { repeatX, repeatY });
    }
    if (pattern !== null) {
        draw(context);
    }
};

export { updateImage };
