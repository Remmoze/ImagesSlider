import { useSelector, useDispatch } from "react-redux";
import { setCount, setShowDots, setSpeed, setMaxDistance } from "../../../redux/dotsSlice";

import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

const Dots = () => {
    const dots = useSelector((storage) => storage.dots);
    const dispatch = useDispatch();
    return (
        <>
            <SettingsSlider
                defaultValue={dots.speed}
                label={"Speed - " + dots.speed + " pixels/s"}
                min={1}
                max={50}
                step={1}
                onChange={(value) => dispatch(setSpeed(value))}
            />
            <SettingsSlider
                defaultValue={dots.count}
                label={"Count - " + dots.count}
                min={0}
                max={250}
                step={1}
                onChange={(value) => dispatch(setCount(value))}
            />
            <SettingsSlider
                defaultValue={dots.maxDistance}
                label={"Max distance - " + dots.maxDistance + " pixels"}
                min={100}
                max={200}
                step={1}
                onChange={(value) => dispatch(setMaxDistance(value))}
            />
            <SettingsCheckbox
                defaultValue={dots.showDots}
                label={"Show Dots"}
                onChange={(value) => dispatch(setShowDots(value))}
            />
        </>
    );
};

export default Dots;
