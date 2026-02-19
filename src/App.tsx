import { useState } from 'react'
import './App.css'
import { type RollData, getRollData } from './data/dice-data';
import { DiceDisplay } from './components/DiceDisplay';

function App() {
    const [rollData, setRollData] = useState<RollData | undefined>(undefined);
    const [numberOfDice, setNumberOfDice] = useState<number>(3);

    const onRollDice = () => {
        setRollData(getRollData(numberOfDice));
    };

    const onReset = () => {
        setNumberOfDice(3);
        setRollData(undefined);
    };

    const onNumberOfDiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfDice(parseInt(event.target.value))
    }

    return (
        <>
            <h1>Dice Game</h1>
            <p>
                Number of Dice: <select value={numberOfDice} onChange={onNumberOfDiceChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </p>
            <p>
                <DiceDisplay values={rollData?.values} />
            </p>
            <p>
                Total: {rollData?.total ?? 0}
            </p>
            <p>
                <button onClick={onRollDice}>Roll Dice</button>
            </p>
            <p>
                <button onClick={onReset}>Reset</button>
            </p>
        </>
    );
}
export default App
