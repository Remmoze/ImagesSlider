import ColorsList from "../../menu/sharedComponents/colorsAdder";
import SettingsSlider from "../../menu/sharedComponents/settingsSlider";

import useGradientAtom from "./atom";

const Blinking = () => {
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

export default Blinking;
