import FileUploader from "../imageSlider/fileUploader";
import { useSelector, useDispatch } from "react-redux";

import SettingsSlider from "../components/settingsSlider";
import { setSpeed } from "../../../redux/canvasGradientSlice";
import Rotation from "../common/rotation";

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
