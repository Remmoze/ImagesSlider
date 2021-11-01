import { useState, useEffect } from "react";

const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width: width, height: height };
};

const handleResize = (setWindowSize) => {
    setWindowSize(getWindowSize());
};

const handleEffect = (setWindowSize) => {
    window.addEventListener("resize", () => handleResize(setWindowSize));
    return () => window.removeEventListener("resize", handleResize);
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => handleEffect(setWindowSize), []);

    return windowSize;
};

export default useWindowSize;
