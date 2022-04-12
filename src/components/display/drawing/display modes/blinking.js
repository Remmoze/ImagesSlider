import { createGradientType } from "../GradientFactory";

const createBlinking = (context, storeGradient, frameCount) => {
    return createGradientType(context, storeGradient, frameCount, "blinking");
};

export { createBlinking };
