import { useRef, useEffect } from "react";

import useConfigAtom from "../../../atoms/config";
import useDotsAtom from "../../../atoms/dots";
import useGradientAtom from "../../../atoms/gradient";
import useImageAtom from "../../../atoms/image";
import useSynthAtom from "../../../atoms/synth";

let frameCount = 0;
const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    const { config } = useConfigAtom();
    const { dots } = useDotsAtom();
    const { gradient } = useGradientAtom();
    const { image } = useImageAtom();
    const { synth } = useSynthAtom();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount, { config, dots, gradient, image, synth });
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
