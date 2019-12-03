import { useState, useEffect } from 'react';

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

function useTimer(max, timeUp) {
  const [count, setCount] = useState(max);
  const [isActive, setIsActive] = useState(false);

  function tick() {
    if (count < 1) {
      setIsActive(false);
      timeUp();
    }
    else if (count <= 0) {
      setCount(max)
    }
    else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    var intervalID = null;
    if (isActive) {
      intervalID = setInterval(() => tick(), 1000);

    }
    else if (!isActive && count !== 0) {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, count]);

  return { count, setCount, isActive, setIsActive };
}

export { useTimer };
export default genericReducer;