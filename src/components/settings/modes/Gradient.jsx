import Rotation from "../common/rotation";
import Speed from "../common/speed";
import ColorsList from "../gradient/colorsAdder";

const Gradient = {
    name: "gradient",
    displayName: "Gradient",
    children: [<Speed />, <Rotation />, <ColorsList />],
};

export default Gradient;
