import { atom } from "recoil";

const synth = atom({
    key: "Synth",
    default: {
        floorHeight: 3 / 4, // 0..1
        numberOfLines: 30,
    },
});

export default synth;
