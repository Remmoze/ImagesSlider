import { drawFloor } from "./helpers/floor";
import { drawBackground } from "./helpers/background";
import { drawHouses } from "./helpers/houses";

const updateSynthwave = (context, storage, frameCount) => {
    let args = [context, context.canvas, storage.synth, frameCount];
    drawBackground(...args);
    drawHouses(...args);
    context.globalAlpha = 0.9;
    drawFloor(...args);
    context.globalAlpha = 1;
};

export { updateSynthwave };
