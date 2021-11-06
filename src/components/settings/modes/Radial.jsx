import ColorsList from "../gradient/colorsAdder";
import Speed from "../common/speed";

const Radial = {
    name: "radial",
    displayName: "Radial",
    children: [<Speed key={"RadialSpeed"} />, <ColorsList key={"RadialColorsList"} />],
};

export default Radial;
