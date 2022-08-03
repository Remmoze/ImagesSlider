import SettingsSlider from "../../menu/sharedComponents/settingsSlider";
import SettingsCheckbox from "../../menu/sharedComponents/settingsCheckbox";

import ImageUpload from "../../menu/sharedComponents/imageUpload";

import particlesAtom from "./atom";

const Particles = () => {
    const { particles, setImageUrl, setSpeed, setScale } = particlesAtom();

    return (
        <>
            <SettingsSlider
                value={particles.speed}
                label={"SpeedX " + particles.speed}
                min={-10}
                max={10}
                step={1}
                onChange={(value) => setSpeed(value)}
            />
            <SettingsCheckbox value={particles.scale} label={"Scale to fit"} onChange={(value) => setScale(value)} />
            <ImageUpload onChange={(newUrl) => setImageUrl(newUrl)} />
        </>
    );
};

export default Particles;
