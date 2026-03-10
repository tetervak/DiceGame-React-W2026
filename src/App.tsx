import { useState } from 'react'
import { type RollData, getRollData } from './data/dice-data';
import { DiceDisplay } from './components/DiceDisplay';
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    type SelectChangeEvent
} from "@mui/material";
import {green, orange} from "@mui/material/colors";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


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

    const onNumberOfDiceChange = (event: SelectChangeEvent<number>): void => {
        setNumberOfDice(event.target.value)
    }

    return (
        <Container maxWidth="sm">
            <h1 style={{color: green[600]}}>Dice Game</h1>
            <p>
                <FormControl size="small">
                    <FormLabel id="number-of-dice-label">Number of Dice</FormLabel>
                    <Select value={numberOfDice} onChange={onNumberOfDiceChange}
                        labelId="number-of-dice-label">
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                    </Select>
                </FormControl>
            </p>
            <p>
                {
                    (rollData != undefined) ?
                        <DiceDisplay values={rollData?.values} /> :
                        <h3 style={{color: orange[600]}}>No dice rolled yet</h3>
                }

            </p>
            <p>
                <label style={{fontWeight: "bold", fontSize: "larger"}}>Total</label>: {rollData?.total ?? 0}
            </p>
            <p>
                <Button variant="contained" color="primary" onClick={onRollDice}>Roll <CheckIcon/></Button>
            </p>
            <p>
                <Button variant="outlined" color="secondary" onClick={onReset}>Reset <ClearIcon/></Button>
            </p>
        </Container>
    );
}
export default App
