import React, { useState } from 'react';

import '../scss/main.scss';

export function Calculator() {
    const [changeThemeCalculator, setChangeThemeCalculator] = useState('calculatorTheme1');

    const [number, setNumber] = useState(0);
    const [value1, setValue1] = useState(0);
    
    const [operator, setOperator] = useState();

    function InsertNumber(e) {
        var value = e.target.value;

        if(number === 0) {
            setNumber(value);
        } else {
            setNumber(number + value);
        }
    }

    function ClearLastNumber() {
        var string = String(number);
        var removeValue = string.slice(0, -1);
        
        if(removeValue.length === 0) {
            setNumber(0);
        } else {
            setNumber(parseFloat(removeValue))
        }        
    }

    function ClearScreen() {
        setNumber(0);
    }

    function Operations(e) {
        var operatorValue = e.target.value;
        setOperator(operatorValue);
        setValue1(number);
        setNumber(0);
    }

    function Calculate() {
        if(operator === '+') {
            var sum = parseFloat(value1) + parseFloat(number);

            setNumber(sum);

        } else if(operator === '-') {
            var difference = parseFloat(value1) - parseFloat(number);

            setNumber(difference);

        } else if(operator === 'x') {
            var multiplication = parseFloat(value1) * parseFloat(number);

            setNumber(multiplication);

        } else if(operator === '/') {
            if (value1 == 0 && number == 0) {
                setNumber('Undefined');

            } else {
                var division = parseFloat(value1) / parseFloat(number);

                setNumber(division);
            }
        }
    }
    

    function ChangeTheme() {
        let buttonSwitcherElement = document.getElementById('inputSwitcher');

        let buttonSwitcher = document.getElementById('inputSwitcher').value;

        if (buttonSwitcher == 1) {
            buttonSwitcherElement.className='';
            buttonSwitcherElement.classList.add('theme1');

            setChangeThemeCalculator(null);
            setChangeThemeCalculator('calculatorTheme1');

        } else if (buttonSwitcher == 2) {
            buttonSwitcherElement.className='';
            buttonSwitcherElement.classList.add('theme2');

            setChangeThemeCalculator(null);
            setChangeThemeCalculator('calculatorTheme2');

        } else if (buttonSwitcher == 3){
            buttonSwitcherElement.className='';
            buttonSwitcherElement.classList.add('theme3');

            setChangeThemeCalculator(null);
            setChangeThemeCalculator('calculatorTheme3');
        }
    }

    return(
        <div className={changeThemeCalculator}>
            <div className="calculator">
                <div className="initial">
                    <p className="name1">calc</p>

                    <div className="switcher">
                        <div className="name2">THEME</div>
                        <div className="themes">
                            <p className="numbers">1 &nbsp; &nbsp;2 &nbsp; &nbsp;3</p>

                            <label>
                                <input 
                                    type="range" 
                                    min={1} 
                                    max={3}

                                    className="theme1"
                                    id="inputSwitcher"

                                    defaultValue={1}

                                    onChange={() => ChangeTheme()}
                                />  
                            </label>
                        </div>
                    </div>
                </div>                

                <div className="display">
                    <p className="result">{number}</p>
                </div>

                <div className="keyboard">
                    <button onClick={InsertNumber} value={7} className="basicCalc">7</button>
                    <button onClick={InsertNumber} value={8} className="basicCalc">8</button>
                    <button onClick={InsertNumber} value={9} className="basicCalc">9</button>
                    <button onClick={ClearLastNumber} className="OtherButton">DEL</button>

                    <button onClick={InsertNumber} value={4} className="basicCalc">4</button>
                    <button onClick={InsertNumber} value={5} className="basicCalc">5</button>
                    <button onClick={InsertNumber} value={6} className="basicCalc">6</button>
                    <button onClick={Operations} value="+" className="basicCalc">+</button>
            

                    <button onClick={InsertNumber} value={1} className="basicCalc">1</button>
                    <button onClick={InsertNumber} value={2} className="basicCalc">2</button>
                    <button onClick={InsertNumber} value={3} className="basicCalc">3</button>
                    <button onClick={Operations} value="-" className="basicCalc">-</button>
            
                    <button onClick={InsertNumber} value={"."} className="basicCalc">.</button>
                    <button onClick={InsertNumber} value={0} className="basicCalc">0</button>
                    <button onClick={Operations} value="/" className="basicCalc">/</button>
                    <button onClick={Operations} value="x" className="basicCalc">x</button>
                
                    <button onClick={ClearScreen} className='OtherButton reset'>RESET</button>
                    <button onClick={Calculate} className='equalButton'>=</button>
                </div>
            </div>

            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
            </div>
        </div>
    );
}