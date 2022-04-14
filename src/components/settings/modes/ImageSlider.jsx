import { useSelector, useDispatch } from "react-redux";
import { setSpeed, setRotation } from "../../../redux/gradientSlice";
import { Typography } from "@mui/material";

import FileUploader from "../imageSlider/fileUploader";
import SettingsSlider from "../components/settingsSlider";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const ImageSlider = () => {
    const gradient = useSelector((store) => store.gradient);
    const dispatch = useDispatch();

    const changeSpeed = (newValue) => {
        dispatch(setSpeed(newValue));
    };

    return (
        <>
            <Typography mt={5} mb={5}>
                Currently broken.
            </Typography>
            <SettingsSlider
                defaultValue={gradient.speed}
                label={"Speed"}
                min={1}
                max={100}
                step={1}
                onChange={changeSpeed}
            />

            <SettingsSlider
                defaultValue={gradient.rotation}
                label={"Rotation - " + getRotationLabel(gradient.rotation)}
                min={0}
                max={Math.PI * 2}
                step={0.01}
                onChange={(value) => dispatch(setRotation(value))}
            />
            <FileUploader />
        </>
    );
};

export default ImageSlider;
