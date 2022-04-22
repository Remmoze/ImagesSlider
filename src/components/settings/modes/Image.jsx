import { useSelector, useDispatch } from "react-redux";
import { setImageUrl, setRepeatX, setRepeatY } from "../../../redux/imageSlice";

import SettingsSlider from "../components/settingsSlider";
import SettingsCheckbox from "../components/settingsCheckbox";

import ImageUpload from "../image/imageUpload";

const Image = () => {
    const { repeatX, repeatY } = useSelector((storage) => storage.image);
    const dispatch = useDispatch();

    return (
        <>
            <SettingsCheckbox
                defaultValue={repeatX}
                label={"Repeat X"}
                onChange={(value) => dispatch(setRepeatX(value))}
            />
            <SettingsCheckbox
                defaultValue={repeatY}
                label={"Repeat Y"}
                onChange={(value) => dispatch(setRepeatY(value))}
            />
            <ImageUpload onChange={(newUrl) => dispatch(setImageUrl(newUrl))} />
        </>
    );
};

export default Image;
