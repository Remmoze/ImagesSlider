import Blinking from "../displayModes/Blinking/menu";
import Dots from "../displayModes/Dots/menu";
import Gradient from "../displayModes/Gradient/menu";
import Image from "../displayModes/Image/menu";
import Particles from "../displayModes/Particles/menu";
import Radial from "../displayModes/Radial/menu";
import Synthwave from "../displayModes/Synthwave/menu";

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
