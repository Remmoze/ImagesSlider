import SettingsSlider from "../../menu/sharedComponents/settingsSlider";
import SettingsCheckbox from "../../menu/sharedComponents/settingsCheckbox";

import ImageUpload from "../../menu/sharedComponents/imageUpload";

import useImageAtom from "./atom";

const Image = () => {
    const { image, setImageUrl, setSpeedX, setSpeedY, setScale, setClampX, setClampY } = useImageAtom();

    return (
        <>
            <SettingsSlider
                value={image.speedX}
                label={"SpeedX " + image.speedX}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeedX(value)}
            />
            <SettingsSlider
                value={image.speedY}
                label={"SpeedY " + image.speedY}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeedY(value)}
            />
            <SettingsCheckbox value={image.scale} label={"Scale to fit"} onChange={(value) => setScale(value)} />
            <SettingsCheckbox value={image.clampX} label={"Clamp X"} onChange={(value) => setClampX(value)} />
            <SettingsCheckbox value={image.clampY} label={"Clamp Y"} onChange={(value) => setClampY(value)} />
            <ImageUpload onChange={(newUrl) => setImageUrl(newUrl)} />
        </>
    );
};

export default Image;
