import { createGradientType } from "../../display/drawing/GradientFactory";

//fix: Transition between colors is flickering when there are only few colors
const createGradient = (context, storeGradient, frameCount) => {
    return createGradientType(context, storeGradient, frameCount, "Gradient");
};

export { createGradient };
