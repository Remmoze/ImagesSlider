import { drawFloor } from "./Synthwave/floor";
import { drawBackground } from "./Synthwave/background";

const updateSynth = (context, store, frameCount) => {
    drawBackground(context, context.canvas, store, frameCount);
    drawFloor(context, context.canvas, store, frameCount);
};

export { updateSynth };
