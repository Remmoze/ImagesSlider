let pattern = null;
const updatePattern = (context, image) => {
    console.log("new pattern");
    pattern = context.createPattern(image, "repeat");
};

let image = new Image();

let offsetX = 0;
let offsetY = 0;

let scalingX = 1;
let scalingY = 1;

const draw = (context, { speedX, speedY, scale, clampX, clampY }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = pattern;

    if (speedX) {
        offsetX += speedX;
        //offsetX %= context.canvas.width;
    }
    if (speedY) {
        offsetY += speedY;
        //offsetY %= context.canvas.height;
    }

    if (scale) {
        if (context.canvas.width <= image.width) {
            if (clampX) {
                scalingX = image.width / context.canvas.width;
            } else {
                scalingX = 1;
            }
        } else {
            scalingX = context.canvas.width / image.width;
        }
        if (context.canvas.height <= image.height) {
            if (clampY) {
                scalingY = image.height / context.canvas.height;
            } else {
                scalingY = 1;
            }
        } else {
            scalingY = context.canvas.height / image.height;
        }
        context.setTransform(scalingX, 0, 0, scalingY, offsetX, offsetY);
        context.fillRect(-offsetX / scalingX, -offsetY / scalingY, context.canvas.width, context.canvas.height);
        context.resetTransform();
    } else {
        context.translate(offsetX, offsetY);
        context.fillRect(-offsetX, -offsetY, context.canvas.width, context.canvas.height);
        context.translate(-offsetX, -offsetY);
    }
};

let prevURL = "";
const updateImage = (context, { imageUrl, ...Storage }) => {
    if (imageUrl !== prevURL) {
        // code
        image = new Image(); // could be removed?
        image.onload = () => {
            updatePattern(context, image);
        };
        image.src = imageUrl;
        prevURL = imageUrl;
    }

    if (pattern !== null) {
        draw(context, Storage);
    }
};

export { updateImage };
