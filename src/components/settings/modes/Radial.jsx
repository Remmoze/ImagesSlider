import SettingsSlider from "../components/settingsSlider";
import ColorsList from "../gradient/colorsAdder";

import useGradientAtom from "../../../atoms/gradient";

const Radial = () => {
    const { gradient, setSpeed } = useGradientAtom();

    return (
        <>
            <SettingsSlider
                defaultValue={gradient.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={setSpeed}
                color={gradient.speed > 20 ? "auto" : "red"}
            />
            <ColorsList />
        </>
    );
};

export default Radial;
