import React, { useEffect } from "react";

const useTimer = (callback) => {
    const requestRef = useRef();
    const previousTimeRef = useRef();

    useEffect(() => {
        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {
                const deltaTime = time - previousTimeRef.current;
                callback(deltaTime);
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [callback]);
};

export default useTimer;
