import { useRef, useEffect } from "react";

import useConfigAtom from "../../atoms/config";
import useBlinkingAtom from "../../displayModes/Blinking/atom";
import useDotsAtom from "../../displayModes/Dots/atom";
import useGradientAtom from "../../displayModes/Gradient/atom";
import useImageAtom from "../../displayModes/Image/atom";
import useParticlesAtom from "../../displayModes/Particles/atom";
import useRadialAtom from "../../displayModes/Radial/atom";
import useSynthAtom from "../../displayModes/Synthwave/atom";

let frameCount = 0;
const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    const config = useConfigAtom();
    const blinking = useBlinkingAtom();
    const dots = useDotsAtom();
    const gradient = useGradientAtom();
    const image = useImageAtom();
    const particles = useParticlesAtom();
    const radial = useRadialAtom();
    const synth = useSynthAtom();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount, { config, blinking, dots, gradient, image, particles, radial, synth });
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, config, blinking, dots, gradient, image, particles, radial, synth]);

    return canvasRef;
};

export default useCanvas;
