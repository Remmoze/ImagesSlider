import ColorsList from "../gradient/colorsAdder";
import Speed from "../common/speed";
import { useSelector, useDispatch } from "react-redux";

// const Radial = {
//     name: "radial",
//     displayName: "Radial",
//     children: [<Speed key={"RadialSpeed"} />, <ColorsList key={"RadialColorsList"} />],
// };

// export default Radial;

const Radial = () => {
    const gradient = useSelector((store) => store.gradient);
    const dispatch = useDispatch();

    return <></>;
};

export default Radial;
