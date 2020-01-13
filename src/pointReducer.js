
export default function pointReducer(state, action) {

  switch (action.type) {
    case 'win':
      let newPoints = state.points + action.timeLeft;
      return { points: newPoints};
    case 'lose':
      return { points: state.points - 3};
    case 'reset':
      return { points: 0 };
    default:
      throw new Error();
  }
}

