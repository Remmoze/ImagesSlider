import SettingsSlider from "../../menu/sharedComponents/settingsSlider";
import ColorsList from "../../menu/sharedComponents/colorsAdder";

import useGradientAtom from "./atom";

const Radial = () => {
    const { gradient, setSpeed } = useGradientAtom();

    return (
        <>
            <SettingsSlider
                value={gradient.speed}
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
