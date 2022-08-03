import { atom, useRecoilState } from "recoil";
import { setProperty } from "./helper";
import { localStorageEffect } from "./helper2";

const blinkingAtom = atom({
    key: "Blinking",
    default: {
        speed: 100,
        colors: [
            "#FF0000", // Red
            "#FFA500", // Orange
            "#FFFF00", // Yellow
            "#008000", // Green
            "#0000FF", // Blue
            "#4B0082", // Indigo
            "#EE82EE", // Violet
        ],
    },
    effects: [localStorageEffect("Blinking")],
});

const useBlinkingAtom = () => {
    const [blinking, setBlinking] = useRecoilState(blinkingAtom);

    const setSpeed = setProperty(setBlinking, "speed");
    const setColors = setProperty(setBlinking, "colors");
    const addColor = (color) => setBlinking((state) => ({ ...state, colors: [...state.colors, color] }));

    const setColorByIndex = (index, color) => {
        setBlinking((state) => {
            const colors = [...state.colors];
            colors[index] = color;
            return { ...state, colors };
        });
    };

    const deleteColorByIndex = (index) => {
        setBlinking((state) => {
            const colors = [...state.colors];
            colors.splice(index, 1);
            return { ...state, colors };
        });
    };

    return {
        blinking,
        setSpeed,
        setColors,
        addColor,
        setColorByIndex,
        deleteColorByIndex,
    };
};

export { blinkingAtom };
export default useBlinkingAtom;
