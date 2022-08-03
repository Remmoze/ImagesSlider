import SettingsSlider from "../../menu/sharedComponents/settingsSlider";
import SettingsCheckbox from "../../menu/sharedComponents/settingsCheckbox";

import useDotsAtom from "./atom";

const Dots = () => {
    const { dots, setCurve, setSpeed, setCount, setShowDots, setShowGrid, setMaxDistance } = useDotsAtom();

    return (
        <>
            <SettingsSlider
                value={dots.speed}
                label={"Speed - " + dots.speed + " pixels/s"}
                min={1}
                max={50}
                step={1}
                onChange={(value) => setSpeed(value)}
            />
            <SettingsSlider
                value={dots.count}
                label={"Count - " + dots.count}
                min={0}
                max={250}
                step={1}
                onChange={(value) => setCount(value)}
            />
            <SettingsSlider
                value={dots.maxDistance}
                label={"Max distance - " + dots.maxDistance + " pixels"}
                min={100}
                max={200}
                step={1}
                onChange={(value) => setMaxDistance(value)}
            />
            <SettingsSlider
                value={dots.curve}
                label={"Curvature"}
                min={0}
                max={300}
                step={1}
                onChange={(value) => setCurve(value)}
            />
            <SettingsCheckbox value={dots.showDots} label={"Show Dots"} onChange={(value) => setShowDots(value)} />
            <SettingsCheckbox value={dots.showGrid} label={"Show Grid"} onChange={(value) => setShowGrid(value)} />
        </>
    );
};

export default Dots;
