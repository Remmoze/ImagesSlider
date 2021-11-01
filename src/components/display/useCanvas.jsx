import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const useCanvas = (draw) => {
    const canvasRef = useRef(null);
    const config = useSelector((storage) => storage.config);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount, config);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, config]);

    return canvasRef;
};

export default useCanvas;
