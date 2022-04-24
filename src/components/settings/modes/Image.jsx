import { useSelector, useDispatch } from "react-redux";
import { setImageUrl, setSpeedX, setSpeedY, setScale } from "../../../redux/imageSlice";

import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

import ImageUpload from "../image/imageUpload";

const Image = () => {
    const { speedX, speedY, scale } = useSelector((storage) => storage.image);
    const dispatch = useDispatch();

    return (
        <>
            <SettingsSlider
                defaultValue={speedX}
                label={"SpeedX " + speedX}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => dispatch(setSpeedX(value))}
            />
            <SettingsSlider
                defaultValue={speedY}
                label={"SpeedY " + speedY}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => dispatch(setSpeedY(value))}
            />
            <SettingsCheckbox
                defaultValue={scale}
                label={"Scale to fit"}
                onChange={(value) => dispatch(setScale(value))}
            />
            <ImageUpload onChange={(newUrl) => dispatch(setImageUrl(newUrl))} />
        </>
    );
};

export default Image;
