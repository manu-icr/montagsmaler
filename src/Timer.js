import React from 'react';

import { useTimer } from './hooks';


const Timer = React.forwardRef((props, ref) => {

  const timer = useTimer(props.max, props.timeUp);

  // let Game.js access the functions of this timer component
  React.useImperativeHandle(ref, () => ({
    start: () => {
      timer.setCount(props.max);
      timer.setIsActive(true);
    },
    stop: () => {
      timer.setIsActive(false);
    },
    toggle: () => {
      timer.setIsActive(!timer.isActive);
    },
    getRemaining: () => {
      return timer.count;
    }
  }));

  if (timer.isActive) {
    return (<div>{"Time left: " + timer.count.toString().padStart(props.max.toString().length, '0')}</div>);
  }
  else {
    return (<div></div>);
  }

});

export default Timer;
export { useTimer };