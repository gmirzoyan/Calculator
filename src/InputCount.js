import React, {useState} from 'react';
import Buttons from "./Buttons";


function InputCount() {


    const [input, setInput] = useState('');


    const buttonHandler = (e) => {
        setInput(input + e.target.value)
    }

    const equalButtonHandler = () => {
        const res = eval(input)
        setInput(res)
    }

    const resetValue = () => {
        setInput('')
    }


    return (
        <div>
            <input className='text' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

            <Buttons buttonHandler={buttonHandler} equalButtonHandler={equalButtonHandler} resetValue={resetValue}
                     input={input}/>
        </div>
    );
}

export default InputCount;
