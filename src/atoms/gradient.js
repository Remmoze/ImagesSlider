import { atom } from "recoil";

const gradient = atom({
    key: "Gradient",
    default: {
        speed: 100,
        rotation: (Math.PI * 5) / 8, //radians
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
});

export default gradient;
