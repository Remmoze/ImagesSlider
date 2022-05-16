import { useDispatch, useSelector } from "react-redux";
import { setFloorHeight, setNumberOfLines } from "../../../redux/synthSlice";

import SettingsSlider from "../components/settingsSlider";

const Synthwave = () => {
    const synth = useSelector((store) => store.synth);
    const dispatch = useDispatch();

    const changeFloorHeight = (newValue) => {
        dispatch(setFloorHeight(newValue / 100));
    };

    return (
        <>
            <SettingsSlider
                defaultValue={synth.floorHeight * 100}
                label={"Floor height: " + (synth.floorHeight * 100).toFixed(0)}
                min={30}
                max={85}
                step={1}
                onChange={changeFloorHeight}
            />
            <SettingsSlider
                defaultValue={synth.numberOfLines}
                label={"Number of lines: " + synth.numberOfLines}
                min={10}
                max={80}
                step={1}
                onChange={(newValue) => dispatch(setNumberOfLines(newValue))}
            />
        </>
    );
};

export default Synthwave;
