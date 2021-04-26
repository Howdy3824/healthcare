const hospitalReducerDefaultState = [];

export default (state = hospitalReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_HOSPITALS':
        return action.hospitals;
      default:
        return state;
    }
  };