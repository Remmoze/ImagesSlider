import { atom } from "recoil";

const config = atom({
    key: "Config",
    default: {
        mode: "Synthwave",
        debug: false,
    },
});

export default config;
