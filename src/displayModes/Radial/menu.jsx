import SettingsSlider from "../../menu/sharedComponents/settingsSlider";
import ColorsList from "../../menu/sharedComponents/colorsAdder";

import useRadialAtom from "./atom";

const Radial = () => {
    const { radial, setSpeed } = useRadialAtom();

    return (
        <>
            <SettingsSlider
                value={radial.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={setSpeed}
                color={radial.speed > 20 ? "auto" : "red"}
            />
            <ColorsList />
        </>
    );
};

export default Radial;
