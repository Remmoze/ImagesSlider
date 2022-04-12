import ColorsList from "../gradient/colorsAdder";
import Speed from "../common/speed";
import { useDispatch, useSelector } from "react-redux";

// const Blinking = {
//     name: "blinking",
//     displayName: "Blinking",
//     children: [<Speed key={"BlinkingSpeed"} />, <ColorsList key={"BlinkingColorsList"} />],
// };

// export default Blinking;

const Blinking = () => {
    const gradient = useSelector((store) => store.gradient);
    const dispatch = useDispatch();

    return <></>;
};

export default Blinking;
