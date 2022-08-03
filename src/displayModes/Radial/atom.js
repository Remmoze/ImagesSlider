import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "../../atoms/helper";

const radialAtom = atom({
    key: "Radial",
    default: {
        speed: 100,
    },
    effects: [localStorageEffect("Radial")],
});

const useRadialAtom = () => {
    const [radial, setRadial] = useRecoilState(radialAtom);

    const setSpeed = setProperty(setRadial, "speed");

    return {
        radial,
        setSpeed,
    };
};

export { radialAtom };
export default useRadialAtom;
