import { useDispatch, useSelector } from "react-redux";
import { setSpeed } from "../../../redux/gradientSlice";

import ColorsList from "../gradient/colorsAdder";
import SettingsSlider from "../components/settingsSlider";

const Blinking = () => {
    const gradient = useSelector((store) => store.gradient);
    const dispatch = useDispatch();

    const changeSpeed = (newValue) => {
        dispatch(setSpeed(newValue));
    };

    return (
        <>
            <SettingsSlider
                defaultValue={gradient.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={changeSpeed}
                color={gradient.speed > 20 ? "auto" : "red"}
            />
            <ColorsList />
        </>
    );
};

export default Blinking;
