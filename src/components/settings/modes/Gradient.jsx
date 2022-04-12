import Rotation from "../common/rotation";
import Speed from "../common/speed";
import ColorsList from "../gradient/colorsAdder";
import { useSelector, useDispatch } from "react-redux";

// const Gradient = {
//     name: "gradient",
//     displayName: "Gradient",
//     children: [
//         <Speed key={"GradientSpeed"} />,
//         <Rotation key={"GradientRotation"} />,
//         <ColorsList key={"GradientColorsList"} />,
//     ],
// };

// export default Gradient;

const Gradient = () => {
    const gradient = useSelector((store) => store.gradient);
    const dispatch = useDispatch();

    return <></>;
};

export default Gradient;
