import React from 'react';


function Buttons(props) {


    return (
        <div>
            <div className="btn-group-vertical">
                <div className="btn-group btn-group-lg" role="group" aria-label="Toolbar with button groups">
                    <button style={{width: 210}} onClick={props.resetValue} type="button" className="btn btn-secondary"
                            value={0}>AC
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-warning"
                            value={'/'}>/
                    </button>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Toolbar with button groups">
                    <button onClick={props.buttonHandler} type="button"
                            className="btn btn-secondary" value={1}>1
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={2}>2
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={3}>3
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-warning" value={'*'}>*
                    </button>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Toolbar with button groups">
                    <button onClick={props.buttonHandler} type="button"
                            className="btn btn-secondary" value={4}>4
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={5}>5
                    </button>
                    <button onClick={props.buttonHandler} type="button"
                            className="btn btn-secondary" value={6}>6
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-warning" value={'-'}>-
                    </button>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Toolbar with button groups">
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={7}>7
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={8}>8
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-secondary" value={9}>9
                    </button>
                    <button onClick={props.buttonHandler} type="button" className="btn btn-warning"
                            value={'+'}>+
                    </button>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Toolbar with button groups">
                    <button style={{width: 140}} onClick={props.buttonHandler} type="button"
                            className="btn btn-secondary"
                            value={0}>0
                    </button>
                    <button onClick={props.buttonHandler} type="button"
                            className="btn btn-secondary"
                            value={'.'}><b>.</b>
                    </button>
                    <button onClick={props.equalButtonHandler} type="button" className="btn btn-warning"
                            value={props.input}>=
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
