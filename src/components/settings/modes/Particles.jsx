import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

import ImageUpload from "../image/imageUpload";

import particlesAtom from "../../../atoms/particles";

const Particles = () => {
    const { particles, setImageUrl, setSpeed, setScale } = particlesAtom();

    return (
        <>
            <SettingsSlider
                defaultValue={particles.speed}
                label={"SpeedX " + particles.speed}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeed(value)}
            />
            <SettingsCheckbox
                defaultValue={particles.scale}
                label={"Scale to fit"}
                onChange={(value) => setScale(value)}
            />
            <ImageUpload onChange={(newUrl) => setImageUrl(newUrl)} />
        </>
    );
};

export default Particles;
