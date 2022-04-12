import { useSelector, useDispatch } from "react-redux";
import { setCount, setShowDots, setSpeed } from "../../../redux/dotsSlice";

import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

const Dots = () => {
    const dots = useSelector((storage) => storage.dots);
    const dispatch = useDispatch();

    const changeCount = (newValue) => {
        dispatch(setCount(newValue));
    };

    const changeShowDots = (newValue) => {
        dispatch(setShowDots(newValue));
    };

    const changeSpeed = (newValue) => {
        dispatch(setSpeed(newValue));
    };

    return (
        <>
            <SettingsSlider
                defaultValue={dots.speed}
                label={"Speed - " + dots.speed}
                min={1}
                max={50}
                step={1}
                onChange={changeSpeed}
            />
            <SettingsSlider
                defaultValue={dots.count}
                label={"Count - " + dots.count}
                min={0}
                max={250}
                step={1}
                onChange={changeCount}
            />
            <SettingsCheckbox defaultValue={dots.showDots} label={"Show Dots"} onChange={changeShowDots} />
        </>
    );
};

export default Dots;
