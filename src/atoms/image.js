import { atom } from "recoil";

import City from "../content/city.jpg";

const image = atom({
    key: "Image",
    default: {
        imageUrl: City,
        speedX: -3,
        speedY: 0,
        scale: true,
        clampX: false,
        clampY: false,
    },
});

export default image;
