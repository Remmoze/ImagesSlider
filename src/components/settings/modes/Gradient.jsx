import ColorsList from "../gradient/colorsAdder";
import SettingsSlider from "../components/settingsSlider";

import useGradientAtom from "../../../atoms/gradient";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const Gradient = () => {
    const { gradient, setSpeed, setRotation } = useGradientAtom();

    return (
        <>
            <SettingsSlider
                defaultValue={gradient.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={(value) => setSpeed(value)}
                color={gradient.speed > 20 ? "auto" : "red"}
            />
            <SettingsSlider
                defaultValue={gradient.rotation}
                label={"Rotation - " + getRotationLabel(gradient.rotation)}
                min={0}
                max={Math.PI * 2}
                step={0.01}
                onChange={(value) => setRotation(value)}
            />
            <ColorsList />
        </>
    );
};

export default Gradient;
