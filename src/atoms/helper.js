import { useResetRecoilState } from "recoil";
import { dotsAtom } from "./dots";
import { gradientAtom } from "./gradient";
import { imageAtom } from "./image";
import { particlesAtom } from "./particles";
import { synthAtom } from "./synth";

const setProperty = (setter, key) => {
    return (value) => {
        setter((state) => ({ ...state, [key]: value }));
    };
};

const useResetAllAtoms = () => {
    const resetDots = useResetRecoilState(dotsAtom);
    const resetGradient = useResetRecoilState(gradientAtom);
    const resetImage = useResetRecoilState(imageAtom);
    const resetSynth = useResetRecoilState(synthAtom);
    const resetParticles = useResetRecoilState(particlesAtom);

    const resetAll = () => {
        resetDots();
        resetGradient();
        resetImage();
        resetSynth();
        resetParticles();
    };

    return resetAll;
};

export { setProperty, useResetAllAtoms };
