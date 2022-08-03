import { useRef, useEffect } from "react";

import useConfigAtom from "../../../atoms/config";
import useDotsAtom from "../../../atoms/dots";
import useGradientAtom from "../../../atoms/gradient";
import useImageAtom from "../../../atoms/image";
import useParticlesAtom from "../../../atoms/particles";
import useSynthAtom from "../../../atoms/synth";

let frameCount = 0;
const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    const { config } = useConfigAtom();
    const { dots } = useDotsAtom();
    const { gradient } = useGradientAtom();
    const { image } = useImageAtom();
    const { synth } = useSynthAtom();
    const { particles } = useParticlesAtom();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount, { config, dots, gradient, image, synth, particles });
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, config, dots, gradient, image, synth]);

    return canvasRef;
};

export default useCanvas;
