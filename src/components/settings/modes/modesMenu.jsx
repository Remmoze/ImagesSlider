import Gradient from "./Gradient";
import ImageSlider from "./ImageSlider";
import Radial from "./Radial";
import Dots from "./Dots";
import Blinking from "./Blinking";

const Modes = [
    {
        name: "Dots",
        component: <Dots />,
    },
    {
        name: "Blinking",
        component: <Blinking />,
    },
    {
        name: "Gradient",
        component: <Gradient />,
    },
    {
        name: "Image",
        component: <ImageSlider />,
    },
    {
        name: "Radial",
        component: <Radial />,
    },
];

export default Modes;
