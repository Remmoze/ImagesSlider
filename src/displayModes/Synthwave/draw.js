import { drawFloor } from "./helpers/floor";
import { drawBackground } from "./helpers/background";
import { drawHouses } from "./helpers/houses";

const updateSynth = (context, store, frameCount) => {
    let args = [context, context.canvas, store, frameCount];
    drawBackground(...args);
    drawHouses(...args);
    context.globalAlpha = 0.9;
    drawFloor(...args);
    context.globalAlpha = 1;
};

export { updateSynth };
