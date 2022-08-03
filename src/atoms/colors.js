import { atom, useRecoilState } from "recoil";
import { localStorageEffect } from "./helper";

const colorsAtom = atom({
    key: "Colors",
    default: [
        "#FF0000", // Red
        "#FFA500", // Orange
        "#FFFF00", // Yellow
        "#008000", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#EE82EE", // Violet
    ],
    effects: [localStorageEffect("Colors")],
});

const useColorsAtom = () => {
    const [colors, setColors] = useRecoilState(colorsAtom);

    const addColor = (color) => setColors((colors) => [...colors, color]);
    const setColorByIndex = (index, color) => {
        setColors((prevColors) => {
            const colors = [...prevColors];
            colors[index] = color;
            return colors;
        });
    };
    const deleteColorByIndex = (index) => {
        if (colors.length < 2) return;
        setColors((prevColors) => {
            const colors = [...prevColors];
            colors.splice(index, 1);
            return colors;
        });
    };

    return {
        colors,
        addColor,
        setColorByIndex,
        deleteColorByIndex,
    };
};

export { colorsAtom };
export default useColorsAtom;
