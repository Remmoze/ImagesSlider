import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "./helper";

const configAtom = atom({
    key: "Config",
    default: {
        mode: "Synthwave",
        debug: false,
    },
    effects: [localStorageEffect("Config")],
});

const useConfigAtom = () => {
    const [config, setConfig] = useRecoilState(configAtom);

    const setMode = setProperty(setConfig, "mode");
    const setDebug = setProperty(setConfig, "debug");

    return {
        config,
        setMode,
        setDebug,
    };
};

export default useConfigAtom;
