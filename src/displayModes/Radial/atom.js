import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "../../atoms/helper";

const radialAtom = atom({
    key: "Radial",
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
    effects: [localStorageEffect("Radial")],
});

const useRadialAtom = () => {
    const [radial, setRadial] = useRecoilState(radialAtom);

    const setSpeed = setProperty(setRadial, "speed");
    const setColors = setProperty(setRadial, "colors");
    const addColor = (color) => setRadial((state) => ({ ...state, colors: [...state.colors, color] }));

    const setColorByIndex = (index, color) => {
        setRadial((state) => {
            const colors = [...state.colors];
            colors[index] = color;
            return { ...state, colors };
        });
    };

    const deleteColorByIndex = (index) => {
        setRadial((state) => {
            const colors = [...state.colors];
            colors.splice(index, 1);
            return { ...state, colors };
        });
    };

    return {
        radial,
        setSpeed,
        setColors,
        addColor,
        setColorByIndex,
        deleteColorByIndex,
    };
};

export { radialAtom };
export default useRadialAtom;
