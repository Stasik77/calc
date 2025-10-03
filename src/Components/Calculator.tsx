import Button from './Button';
import {useState} from 'react';

export function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operation, setOperation] = useState<string | null>(null);

    const handleNumberClick = (num: string) => {
        if (display === '0') {
            setDisplay(num);
        } else {
            setDisplay(display + num);
        }
    }

    const handleOperationClick = (op: string) => {
        setPreviousValue(display);
        setOperation(op);
        setDisplay('0');
    }

  const handleOperationClick2 = (op: string) => {
        setPreviousValue(display);
        setOperation(op);
        setDisplay('0');
    }

    const handleEquals = () => {
        if (!previousValue || !operation) return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(display);
        let result = 0;

        switch (operation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': result = prev / current; break;
            default: return;
        }

        setDisplay(result.toString());
        setPreviousValue(null);
        setOperation(null);
    }

    const handleClear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
    }

    return (
        <div className="main">
            <h1>My Calculator</h1>
            <div className="cal">
                <div style={{
                    fontSize: '24px',
                    padding: '10px',
                    border: '5px solid #ccc',
                    marginBottom: '10px',
                    textAlign: 'right'
                }}>
                    {display}
                </div>

                <Button title={'1'} callBack={() => handleNumberClick('1')} />
                <Button title={'2'} callBack={() => handleNumberClick('2')} />
                <Button title={'3'} callBack={() => handleNumberClick('3')} />
                <Button title={'4'} callBack={() => handleNumberClick('4')} />
                <Button title={'4'} callBack={() => handleNumberClick('5')} />
                <Button title={'4'} callBack={() => handleNumberClick('6')} />
                <Button title={'4'} callBack={() => handleNumberClick('7')} />
                <Button title={'4'} callBack={() => handleNumberClick('8')} />
                <Button title={'4'} callBack={() => handleNumberClick('9')} />
                <Button title={'+'} callBack={() => handleOperationClick('+')} />
                <Button title={'+'} callBack={() => handleOperationClick2('-')} />
                <Button title={'+'} callBack={() => handleOperationClick2('*')} />
                <Button title={'='} callBack={handleEquals} />

                <Button title={'C'} callBack={handleClear} />
            </div>
        </div>
    )
}

export default Calculator;