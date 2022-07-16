import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

import useDotsAtom from "../../../atoms/dots";

const Dots = () => {
    const { dots, setCurve, setSpeed, setCount, setShowDots, setShowGrid, setMaxDistance } = useDotsAtom();

    return (
        <>
            <SettingsSlider
                defaultValue={dots.speed}
                label={"Speed - " + dots.speed + " pixels/s"}
                min={1}
                max={50}
                step={1}
                onChange={(value) => setSpeed(value)}
            />
            <SettingsSlider
                defaultValue={dots.count}
                label={"Count - " + dots.count}
                min={0}
                max={250}
                step={1}
                onChange={(value) => setCount(value)}
            />
            <SettingsSlider
                defaultValue={dots.maxDistance}
                label={"Max distance - " + dots.maxDistance + " pixels"}
                min={100}
                max={200}
                step={1}
                onChange={(value) => setMaxDistance(value)}
            />
            <SettingsSlider
                defaultValue={dots.curve}
                label={"Curvature"}
                min={0}
                max={300}
                step={1}
                onChange={(value) => setCurve(value)}
            />
            <SettingsCheckbox
                defaultValue={dots.showDots}
                label={"Show Dots"}
                onChange={(value) => setShowDots(value)}
            />
            <SettingsCheckbox
                defaultValue={dots.showGrid}
                label={"Show Grid"}
                onChange={(value) => setShowGrid(value)}
            />
        </>
    );
};

export default Dots;
