import { useState } from "react";
import "./App.css";
import { OneDice } from "./components/OneDice";
import { getRandomDiceValue } from "./data/dice-data";

function App() {
    const [diceValue, setDiceValue] = useState(1);

    const onRollDice = () => {
        setDiceValue(getRandomDiceValue());
    };

    const onNextSide = () => {
        setDiceValue((value: number): number => (value < 6) ? value + 1 : 1);
    };

    return (
        <>
            <h1>Dice Game</h1>
            <p><OneDice side={diceValue} /></p>
            <p><button onClick={onRollDice}>Roll Dice</button></p>
            <p><button onClick={onNextSide}>Next Side</button></p>
        </>
    );
}

export default App;