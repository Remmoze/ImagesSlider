//import Speed from "../common/speed";

import Count from "../components/count";
import ShowDots from "../components/showDots";

const Dots = {
    name: "dots",
    displayName: "Dots",
    children: [<Count key={"DotsCount"} />, <ShowDots key={"DotsShow"} />],
};

export default Dots;
