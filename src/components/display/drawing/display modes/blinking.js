import { createGradientType } from "../GradientFactory";

const createBlinking = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "blinking");
};

export { createBlinking };
