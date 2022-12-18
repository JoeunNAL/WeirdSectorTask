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
      <section className="input_section">
        <label htmlFor="heartCounter">하트의 개수</label>
        <input
          value={inputValue}
          type="number"
          placeholder="숫자를 입력해주세요"
          onChange={onChangeInputValue}
          id="heartCounter"
        />
      </section>
      <section className='heart_print_section'>
        <ul>
          {heartLists.map(el => {
            return <li key={el + Math.random()}>{el}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
