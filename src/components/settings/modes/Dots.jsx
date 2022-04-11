import Speed from "../common/speed";
import Count from "../common/count";
import ShowDots from "../common/showDots";

const Dots = {
    name: "dots",
    displayName: "Dots",
    children: [<Speed key={"DotsSpeed"} />, <Count key={"DotsCount"} />, <ShowDots key={"DotsShow"} />],
};

export default Dots;
