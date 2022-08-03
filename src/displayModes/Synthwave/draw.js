import { drawFloor } from "./Synthwave/floor";
import { drawBackground } from "./Synthwave/background";
import { drawHouses } from "./Synthwave/houses";

const updateSynth = (context, store, frameCount) => {
    let args = [context, context.canvas, store, frameCount];
    drawBackground(...args);
    drawHouses(...args);
    context.globalAlpha = 0.9;
    drawFloor(...args);
    context.globalAlpha = 1;
};

export { updateSynth };
