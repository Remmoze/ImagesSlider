import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "../../atoms/helper";

const gradientAtom = atom({
    key: "Gradient",
    default: {
        speed: 100,
        rotation: (Math.PI * 5) / 8, //radians
    },
    effects: [localStorageEffect("Gradient")],
});

const useGradientAtom = () => {
    const [gradient, setGradient] = useRecoilState(gradientAtom);

    const setSpeed = setProperty(setGradient, "speed");
    const setRotation = setProperty(setGradient, "rotation");

    return {
        gradient,
        setSpeed,
        setRotation,
    };
};

export { gradientAtom };
export default useGradientAtom;
