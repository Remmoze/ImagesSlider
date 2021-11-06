import ColorsList from "../gradient/colorsAdder";
import Speed from "../common/speed";

const Blinking = {
    name: "blinking",
    displayName: "Blinking",
    children: [<Speed key={"BlinkingSpeed"} />, <ColorsList key={"BlinkingColorsList"} />],
};

export default Blinking;
