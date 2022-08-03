import { createGradientType } from "../../display/drawing/GradientFactory";

const createBlinking = (context, storeGradient, frameCount) => {
    return createGradientType(context, storeGradient, frameCount, "Blinking");
};

export { createBlinking };
