import { useRef, useEffect } from "react";
import useStorage from "./useStorage";

let frameCount = 0;
const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    const storage = useStorage();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount, storage);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => window.cancelAnimationFrame(animationFrameId);
    }, [draw, storage]);

    return canvasRef;
};

export default useCanvas;
