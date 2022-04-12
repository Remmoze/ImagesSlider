import FileUploader from "../imageSlider/fileUploader";
import Speed from "../common/speed";
import Rotation from "../common/rotation";
import { useSelector, useDispatch } from "react-redux";

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

    return <></>;
};

export default ImageSlider;
