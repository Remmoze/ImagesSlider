import SettingsSlider from "../components/settingsSlider";

import ImageUpload from "../image/imageUpload";

import particlesAtom from "../../../atoms/particles";

const Particles = () => {
    const { particles, setImageUrl, setSpeed, setScale } = particlesAtom();

    return (
        <>
            <SettingsSlider
                defaultValue={image.speedX}
                label={"SpeedX " + image.speedX}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeedX(value)}
            />
            <SettingsSlider
                defaultValue={image.speedY}
                label={"SpeedY " + image.speedY}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeedY(value)}
            />
            <SettingsCheckbox defaultValue={image.scale} label={"Scale to fit"} onChange={(value) => setScale(value)} />
            <SettingsCheckbox defaultValue={image.clampX} label={"Clamp X"} onChange={(value) => setClampX(value)} />
            <SettingsCheckbox defaultValue={image.clampY} label={"Clamp Y"} onChange={(value) => setClampY(value)} />
            <ImageUpload onChange={(newUrl) => setImageUrl(newUrl)} />
        </>
    );
};

export default Particles;
