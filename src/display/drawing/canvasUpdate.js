import { updateBlinking } from "../../displayModes/Blinking/draw";
import { updateDots } from "../../displayModes/Dots/draw";
import { updateGradient } from "../../displayModes/Gradient/draw";
import { updateImage } from "../../displayModes/Image/draw";
import { updateParticles } from "../../displayModes/Particles/draw";
import { updateRadial } from "../../displayModes/Radial/draw";
import { updateSynthwave } from "../../displayModes/Synthwave/draw";

import { drawDebug, drawDefault, needsUpdate } from "./canvasUpdateHelper";

const updaters = {
    Blinking: updateBlinking,
    Dots: updateDots,
    Gradient: updateGradient,
    Image: updateImage,
    Particles: updateParticles,
    Radial: updateRadial,
    Synthwave: updateSynthwave,
};

const CanvasUpdate = (context, frameCount, storage) => {
    const needToUpdate = needsUpdate(context, storage.config.mode);

    drawDefault(context);

    if (storage.config.mode in updaters) {
        const updater = updaters[storage.config.mode];
        updater(context, storage, frameCount, needToUpdate);
    }

    if (storage.config.debug) {
        drawDebug(context, frameCount);
    }
};

export default CanvasUpdate;
