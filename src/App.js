import './App.css';
import printer from './printer';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const heartLists = printer.printHearts(inputValue).split('\n');

  const onChangeInputValue = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        value={inputValue}
        type="number"
        placeholder="숫자를 입력해주세요"
        onChange={onChangeInputValue}
      />
      <ul>
        {heartLists.map(el => {
          return <li key={el + Math.random()}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
