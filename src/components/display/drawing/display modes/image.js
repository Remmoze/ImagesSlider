let pattern = null;
const updatePattern = (context, image) => {
    console.log("new pattern");
    pattern = context.createPattern(image, "repeat");
};

let image = new Image();

let offsetX = 0;
let offsetY = 0;
const draw = (context, speed, moveX, moveY) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = pattern;

    if (moveX) {
        offsetX += speed;
        //offsetX %= context.canvas.width;
    }
    if (moveY) {
        offsetY += speed;
        //offsetY %= context.canvas.height;
    }

    context.translate(offsetX, offsetY);

    console.log(offsetX, offsetY);
    context.fillRect(-offsetX, -offsetY, context.canvas.width, context.canvas.height);

    context.translate(-offsetX, -offsetY);
};

let prevURL = "";
const updateImage = (context, { imageUrl, speed, moveX, moveY }) => {
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
        draw(context, speed, moveX, moveY);
    }
};

export { updateImage };
