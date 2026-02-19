import { OneDice } from "./OneDice";

type DiceDisplayProps = {
    values: number[] | undefined;
}

export function DiceDisplay({values}: DiceDisplayProps){
    return (
        <>
        {values?.map((value, index)=><OneDice side={value} key={`${index}_${value}`}/>)}
        </>
    )
}