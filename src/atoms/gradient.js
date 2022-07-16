import { atom, useRecoilState } from "recoil";
import setProperty from "./helper";

const gradientAtom = atom({
    key: "Gradient",
    default: {
        speed: 100,
        rotation: (Math.PI * 5) / 8, //radians
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
});

const useGradientAtom = () => {
    const [gradient, setGradient] = useRecoilState(gradientAtom);

    const setSpeed = setProperty(setGradient, "speed");
    const setRotation = setProperty(setGradient, "rotation");
    const setColors = setProperty(setGradient, "colors");
    const addColor = (color) => setGradient((state) => ({ ...state, colors: [...state.colors, color] }));

    const setColorByIndex = (index, color) => {
        setGradient((state) => {
            const colors = [...state.colors];
            colors[index] = color;
            return { ...state, colors };
        });
    };

    const deleteColorByIndex = (index) => {
        setGradient((state) => {
            const colors = [...state.colors];
            colors.splice(index, 1);
            return { ...state, colors };
        });
    };

    return {
        gradient,
        setSpeed,
        setRotation,
        setColors,
        addColor,
        setColorByIndex,
        deleteColorByIndex,
    };
};

export default useGradientAtom;
