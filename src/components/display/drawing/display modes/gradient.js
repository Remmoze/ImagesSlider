import { createGradientType } from "../GradientFactory";

//fix: Transition between colors is flickering when there are only few colors
const createGradient = (context, config, frameCount) => {
    return createGradientType(context, config, frameCount, "gradient");
};

export { createGradient };
