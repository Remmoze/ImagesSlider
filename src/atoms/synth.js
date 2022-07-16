import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "./helper";

const synthAtom = atom({
    key: "Synth",
    default: {
        floorHeight: 3 / 4, // 0..1
        numberOfLines: 30,
    },
    effects: [localStorageEffect("Synth")],
});

const useSynthAtom = () => {
    const [synth, setSynth] = useRecoilState(synthAtom);

    const setFloorHeight = setProperty(setSynth, "floorHeight");
    const setNumberOfLines = setProperty(setSynth, "numberOfLines");

    return {
        synth,
        setFloorHeight,
        setNumberOfLines,
    };
};

export default useSynthAtom;
