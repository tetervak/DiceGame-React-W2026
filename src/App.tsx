import { useState } from "react";
import "./App.css";
import { OneDice } from "./components/OneDice";
import { getRandomDiceValue } from "./data/dice-data";

function App() {
    const [diceValue, setDiceValue] = useState(1);

    const onRollDice = () => {
        setDiceValue(getRandomDiceValue());
    };

    const onNextDice = () => {
        let nextValue: number;
        if (diceValue < 6) {
            nextValue = diceValue + 1;
        } else {
            nextValue = 1;
        }
        setDiceValue(nextValue);
    };

    return (
        <>
            <h1>Dice Game</h1>
            <p><OneDice side={diceValue} /></p>
            <p><button onClick={onRollDice}>Roll Dice</button></p>
            <p><button onClick={onNextDice}>Next Dice</button></p>
        </>
    );
}

export default App;