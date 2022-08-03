import Gradient from "./Gradient";
import Image from "./Image";
import Radial from "./Radial";
import Dots from "./Dots";
import Blinking from "./Blinking";
import Synthwave from "./Synthwave";
import Particles from "./Particles";

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
        component: <Image />,
    },
    {
        name: "Radial",
        component: <Radial />,
    },
    {
        name: "Synthwave",
        component: <Synthwave />,
    },
    {
        name: "Particles",
        component: <Particles />,
    },
];

export default Modes;
