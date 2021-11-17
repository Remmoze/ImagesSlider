const getImagePattern = (context, image) => {
    let pattern = context.createPattern(image, "repeat"); //change repeat to config.repetition pattern
    return pattern;
};

/* ------------------------------ */

const createImageSlider = (context, image) => {
    return getImagePattern(context, image);
};

export { createImageSlider };
