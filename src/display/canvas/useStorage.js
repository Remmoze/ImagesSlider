import useConfigAtom from "../../atoms/config";
import useColorsAtom from "../../atoms/colors";
import useBlinkingAtom from "../../displayModes/Blinking/atom";
import useDotsAtom from "../../displayModes/Dots/atom";
import useGradientAtom from "../../displayModes/Gradient/atom";
import useImageAtom from "../../displayModes/Image/atom";
import useParticlesAtom from "../../displayModes/Particles/atom";
import useRadialAtom from "../../displayModes/Radial/atom";
import useSynthAtom from "../../displayModes/Synthwave/atom";

const useStorage = () => {
    const { config } = useConfigAtom();
    const { colors } = useColorsAtom();

    const { blinking } = useBlinkingAtom();
    const { dots } = useDotsAtom();
    const { gradient } = useGradientAtom();
    const { image } = useImageAtom();
    const { particles } = useParticlesAtom();
    const { radial } = useRadialAtom();
    const { synth } = useSynthAtom();

    return { config, colors, blinking, dots, gradient, image, particles, radial, synth };
};

export default useStorage;
