import { useSelector, useDispatch } from "react-redux";
import { setImageUrl, setSpeed, setMoveX, setMoveY } from "../../../redux/imageSlice";

import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

import ImageUpload from "../image/imageUpload";

const Image = () => {
    const { speed, moveX, moveY } = useSelector((storage) => storage.image);
    const dispatch = useDispatch();

    return (
        <>
            <SettingsSlider
                defaultValue={speed}
                label={"Speed"}
                min={0}
                max={10}
                step={1}
                onChange={(value) => dispatch(setSpeed(value))}
            />
            <SettingsCheckbox defaultValue={moveX} label={"Move X"} onChange={(value) => dispatch(setMoveX(value))} />
            <SettingsCheckbox defaultValue={moveY} label={"Move Y"} onChange={(value) => dispatch(setMoveY(value))} />
            <ImageUpload onChange={(newUrl) => dispatch(setImageUrl(newUrl))} />
        </>
    );
};

export default Image;
