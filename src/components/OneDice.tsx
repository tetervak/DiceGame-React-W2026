import side1 from "../assets/images/dice/side_1.png";
import side2 from "../assets/images/dice/side_2.png";
import side3 from "../assets/images/dice/side_3.png";
import side4 from "../assets/images/dice/side_4.png";
import side5 from "../assets/images/dice/side_5.png";
import side6 from "../assets/images/dice/side_6.png";

const sides: string[] = [side1, side2, side3, side4, side5, side6];

type OneDiceProps = {
  side: number;
};

export function OneDice({ side }: OneDiceProps) {
  return <img src={sides[side - 1]} alt={"side " + side}></img>;
}
