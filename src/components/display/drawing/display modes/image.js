let pattern = null;
const updatePattern = (context, image) => {
    console.log("new pattern");
    pattern = context.createPattern(image, "repeat");
};

let image = new Image();

let offsetX = 0;
let offsetY = 0;
const draw = (context, speedX, speedY) => {
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

    context.translate(offsetX, offsetY);

    console.log(offsetX, offsetY);
    context.fillRect(-offsetX, -offsetY, context.canvas.width, context.canvas.height);

    context.translate(-offsetX, -offsetY);
};

let prevURL = "";
const updateImage = (context, { imageUrl, speedX, speedY }) => {
    if (imageUrl !== prevURL) {
        console.log("was here", imageUrl);
        // code
        image = new Image(); // could be removed?
        image.onload = () => {
            updatePattern(context, image);
        };
        image.src = imageUrl;
        prevURL = imageUrl;
    }

    if (pattern !== null) {
        draw(context, speedX, speedY);
    }
};

export { updateImage };
