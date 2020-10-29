import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import InputCount from "./InputCount";

function App() {


    return (
        <div className='container'>
            <div className='body'>
                <h4>C A L C U L A T O R</h4>
                <br/>
                <InputCount/>
            </div>
        </div>
    );
}

export default App;
