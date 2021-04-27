const dfilterReducerDefaultState = {
    text: ''
};

export default (state = dfilterReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      default:
        return state;
    }
  };