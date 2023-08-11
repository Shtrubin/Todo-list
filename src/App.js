import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [todoData, setTodoData] = useState([]); 

  const getInputData = (event) => {
    setInputValue(event.target.value);
  };

  const submit = () => {
    try {
      if (inputValue.trim() !== '') {
        setTodoData([...todoData, inputValue]); 
        setInputValue(''); 
      }
    } catch (error) {
    }
  };

  const removeItem = (index) => {
    const updatedTodoData = [...todoData];
    updatedTodoData.splice(index, 1); 
    setTodoData(updatedTodoData);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To DO LIST</h1>
          <br/>
          <input
            type="text"
            placeholder="Add an item"
            onChange={getInputData}
            value={inputValue}
          />
          <button onClick={submit}>+</button>

          <ol>
            {todoData.map((item, index) => (
              <li key={index}>
                {item}
                <button className='But' onClick={() => removeItem(index)}>-</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
