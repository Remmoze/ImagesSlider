import { useResetRecoilState } from "recoil";

import { blinkingAtom } from "../displayModes/Blinking/atom";
import { dotsAtom } from "../displayModes/Dots/atom";
import { gradientAtom } from "../displayModes/Gradient/atom";
import { imageAtom } from "../displayModes/Image/atom";
import { particlesAtom } from "../displayModes/Particles/atom";
import { radialAtom } from "../displayModes/Radial/atom";
import { synthAtom } from "../displayModes/Synthwave/atom";

const useResetAllAtoms = () => {
    const resetBlinking = useResetRecoilState(blinkingAtom);
    const resetDots = useResetRecoilState(dotsAtom);
    const resetGradient = useResetRecoilState(gradientAtom);
    const resetImage = useResetRecoilState(imageAtom);
    const resetParticles = useResetRecoilState(particlesAtom);
    const resetRadial = useResetRecoilState(radialAtom);
    const resetSynth = useResetRecoilState(synthAtom);

    const resetAll = () => {
        resetBlinking();
        resetDots();
        resetGradient();
        resetImage();
        resetParticles();
        resetRadial();
        resetSynth();
    };

    return resetAll;
};

export { useResetAllAtoms };
