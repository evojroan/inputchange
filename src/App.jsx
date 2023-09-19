import { useState } from 'react';
import './App.css';
const inittext = [
  { num: 0, name: 'A', text: '' },
  { num: 1, name: 'B', text: '' },
  { num: 2, name: 'C', text: '' }
];

const lightbulbs = [
  { num: 0, toggle: false },
  { num: 1, toggle: false },
  { num: 2, toggle: false }
];

const initword = 'Hi';

export default function App() {
  const [text, setText] = useState(inittext);
  const [bulbs, setBulbs] = useState(lightbulbs);
  const [word, setWord] = useState(initword);

  function Textbar({ num, name ,text,setText}) {
    return (
      <div className='textbar'>
        {name}
        <input
          type='text'
          placeholder='input here'
          onChange={event => {
            setText(prevItems =>
              prevItems.map((item, index) => {
                if (index === num) {
                  return { ...item, text: event.target.value };
                } else {
                  return item;
                }
              })
            );
          }}
          value={text}
        />
        {text}
      </div>
    );
  }

  function Lightswitch({ num, toggle, setBulbs }) {
    return (
      <button
        onClick={() => {
          setBulbs(prevBulbs => {
            return prevBulbs.map((bulb, index) =>
              num === index ? { ...bulb, toggle: !bulb.toggle } : bulb
            );
          });
        }}>
        {toggle ? 'ON' : 'OFF'}
      </button>
    );
  }

  return (
    <>
      <div>
        <h1>Textbar</h1>
        {text.map(item => {
          return (
            <Textbar
              key={item.num}
              num={item.num}
              text={item.text}
              name={item.name}
              setText={setText}
            />
          );
        })}
      </div>
      <div>
        <h1>Lightbulbs</h1>
        {bulbs.map(item => {
          return (
            <Lightswitch
              key={item.num}
              num={item.num}
              toggle={item.toggle}
              setBulbs={setBulbs}
            />
          );
        })}
      </div>
      <h1>Word</h1>
      <input
        type='text'
        onChange={event => {
          setWord(event.target.value);
        }}
      />{' '}
      {word}
    </>
  );
}
