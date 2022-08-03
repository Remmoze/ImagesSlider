import ColorsList from "../../menu/sharedComponents/colorsAdder";
import SettingsSlider from "../../menu/sharedComponents/settingsSlider";

import useBlinkingAtom from "./atom";

const Blinking = () => {
    const { blinking, setSpeed } = useBlinkingAtom();
    return (
        <>
            <SettingsSlider
                value={blinking.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={setSpeed}
                color={blinking.speed > 20 ? "auto" : "red"}
            />
            <ColorsList />
        </>
    );
};

export default Blinking;
