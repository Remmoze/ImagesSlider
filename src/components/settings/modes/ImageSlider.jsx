import FileUploader from "../imageSlider/fileUploader";
import { useSelector, useDispatch } from "react-redux";

import SettingsSlider from "../components/settingsSlider";
import { setSpeed } from "../../../redux/gradientSlice";
import Rotation from "../common/rotation";
import { Typography } from "@mui/material";

// const ImageSlider = {
//     name: "image",
//     displayName: "Image",
//     children: [
//         <Speed minVal={1} maxVal={200} key={"ImageSpeed"} />,
//         <Rotation key={"ImageRotation"} />,
//         <FileUploader key={"ImageFileUploader"} />,
//     ],
// };

// export default ImageSlider;

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
            <Rotation />
            <FileUploader />
        </>
    );
};

export default ImageSlider;
