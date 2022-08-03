import SettingsSlider from "../components/settingsSlider";
import useSynthAtom from "../../../atoms/synth";

const Synthwave = () => {
    const { synth, setFloorHeight, setNumberOfLines } = useSynthAtom();

    return (
        <>
            <SettingsSlider
                value={synth.floorHeight * 100}
                label={"Floor height: " + (synth.floorHeight * 100).toFixed(0)}
                min={30}
                max={85}
                step={1}
                onChange={(newValue) => setFloorHeight(newValue / 100)}
            />
            <SettingsSlider
                value={synth.numberOfLines}
                label={"Number of lines: " + synth.numberOfLines}
                min={20}
                max={60}
                step={1}
                onChange={(newValue) => setNumberOfLines(newValue)}
            />
        </>
    );
};

export default Synthwave;
