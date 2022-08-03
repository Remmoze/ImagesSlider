import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "../../atoms/helper";

const blinkingAtom = atom({
    key: "Blinking",
    default: {
        speed: 100,
    },
    effects: [localStorageEffect("Blinking")],
});

const useBlinkingAtom = () => {
    const [blinking, setBlinking] = useRecoilState(blinkingAtom);

    const setSpeed = setProperty(setBlinking, "speed");

    return {
        blinking,
        setSpeed,
    };
};

export { blinkingAtom };
export default useBlinkingAtom;
