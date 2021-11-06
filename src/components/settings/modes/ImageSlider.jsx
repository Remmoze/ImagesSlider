import FileUploader from "../imageSlider/fileUploader";
import Speed from "../common/speed";
import Rotation from "../common/rotation";

const ImageSlider = {
    name: "image",
    displayName: "Image",
    children: [<Speed />, <Rotation />, <FileUploader />],
};

export default ImageSlider;
