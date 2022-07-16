import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "./helper";

const dotsAtom = atom({
    key: "Dots",
    default: {
        curve: 0,
        speed: 50,
        count: 100,
        showDots: true,
        showGrid: false,
        maxDistance: 120,
    },
    effects: [localStorageEffect("Dots")],
});

const useDotsAtom = () => {
    const [dots, setDots] = useRecoilState(dotsAtom);

    const setCurve = setProperty(setDots, "curve");
    const setSpeed = setProperty(setDots, "speed");
    const setCount = setProperty(setDots, "count");
    const setShowDots = setProperty(setDots, "showDots");
    const setShowGrid = setProperty(setDots, "showGrid");
    const setMaxDistance = setProperty(setDots, "maxDistance");

    return {
        dots,
        setCurve,
        setSpeed,
        setCount,
        setShowDots,
        setShowGrid,
        setMaxDistance,
    };
};

export default useDotsAtom;
