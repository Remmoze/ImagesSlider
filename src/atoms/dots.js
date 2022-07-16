import { atom } from "recoil";

const dots = atom({
    key: "Dots",
    default: {
        speed: 50,
        count: 100,
        maxDistance: 120,
        showDots: true,
        showGrid: false,
        curve: 0,
    },
});

export default dots;
