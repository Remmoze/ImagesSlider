import ColorsList from "../gradient/colorsAdder";
import { useDispatch, useSelector } from "react-redux";

import SettingsSlider from "../components/settingsSlider";
import { setSpeed } from "../../../redux/gradientSlice";

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
            />
            <ColorsList />
        </>
    );
};

export default Blinking;
