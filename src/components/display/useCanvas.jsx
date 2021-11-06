import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const createNewImage = (newUrl) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = newUrl;
        image.addEventListener("load", (e) => {
            resolve(image);
        });
    });
};

const useCanvas = (draw) => {
    const [displayImage, setdisplayImage] = useState(null);

    const canvasRef = useRef(null);
    const config = useSelector((storage) => storage.config);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let frameCount = 0;
        let animationFrameId;

        if (config.imageUrl !== null && (displayImage === null || config.imageUrl !== displayImage.src)) {
            createNewImage(config.imageUrl).then((image) => {
                setdisplayImage(image);
            });
        }

        const render = () => {
            frameCount++;
            draw(context, frameCount, config, displayImage);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, config, displayImage]);

    return canvasRef;
};

export default useCanvas;
