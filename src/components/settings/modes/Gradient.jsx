import Rotation from "../gradient/rotation";
import Speed from "../gradient/speed";
import ColorsList from "../gradient/colorsAdder";

const Gradient = {
    name: "gradient",
    displayName: "Gradient",
    children: [<Speed />, <Rotation />, <ColorsList />],
};

export default Gradient;
