//import React, { useReducer, useState, useContext } from 'react';

//import GameContext from './GameContext';

const genericReducer = (state, action) => {
  console.log("Reducer");
  console.log(state);
  console.log(action);
  console.log("Reducer");
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'add':
      return { count: state.count + parseInt(action.value) };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};
/*
function HookTest() {
  const [state, dispatch] = useReducer(genericReducer, { count: 0 });
  const [modifier, setModifier] = useState(1);
  const gameContext = useContext(GameContext);

  function Increment()
  {
    dispatch({ type: 'increment' });
    console.log("state.count = " + state.count);
    console.log("gameContext");
    console.log(gameContext);
  }

  function Decrement()
  {
    dispatch({ type: 'decrement' });
  }
  return (
    <div>
      <button onClick={() => Increment()}>
        Increment: {state.count}
      </button>
      <button onClick={() => Decrement()}>
        Decrement: {state.count}
      </button>
      <br />
      <input type="number" value={modifier} onChange={event => setModifier(event.target.value)}></input>
      <button onClick={() => dispatch({ type: 'add', value: modifier })}>
        Add: {!modifier ? 0 : modifier}
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset: {state.count}
      </button>
    </div>
  );
} 
export {HookTest};*/
export default genericReducer;