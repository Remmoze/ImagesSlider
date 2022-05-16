import { useRef, useEffect } from "react";

import { useSelector } from "react-redux";

let frameCount = 0;
const useCanvas = (draw) => {
    const canvasRef = useRef(null);
    const config = useSelector((storage) => storage.config);
    const storage = useSelector((storage) => storage);

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

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, config, storage]);

    return canvasRef;
};

export default useCanvas;
