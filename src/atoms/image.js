import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "./helper";

import City from "../content/city.jpg";

const imageAtom = atom({
    key: "Image",
    default: {
        imageUrl: City,
        speedX: -3,
        speedY: 0,
        scale: true,
        clampX: false,
        clampY: false,
    },
    effects: [localStorageEffect("Image")],
});

const useImageAtom = () => {
    const [image, setImage] = useRecoilState(imageAtom);

    const setImageUrl = setProperty(setImage, "imageUrl");
    const setSpeedX = setProperty(setImage, "speedX");
    const setSpeedY = setProperty(setImage, "speedY");
    const setScale = setProperty(setImage, "scale");
    const setClampX = setProperty(setImage, "clampX");
    const setClampY = setProperty(setImage, "clampY");

    return {
        image,
        setImageUrl,
        setSpeedX,
        setSpeedY,
        setScale,
        setClampX,
        setClampY,
    };
};

export default useImageAtom;
