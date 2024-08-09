import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';  

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    setValue((prev) => prev + e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setValue(evaluate(value) || '');
    } catch {
      setValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleButtonClick} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="=" className="equal" onClick={handleEvaluate} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
