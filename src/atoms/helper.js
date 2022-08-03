import { useResetRecoilState } from "recoil";
import { dotsAtom } from "./dots";
import { gradientAtom } from "./gradient";
import { imageAtom } from "./image";
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

    const resetAll = () => {
        resetDots();
        resetGradient();
        resetImage();
        resetSynth();
    };

    return resetAll;
};

export { setProperty, useResetAllAtoms };
