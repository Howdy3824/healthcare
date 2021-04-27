const dfilterReducerDefaultState = {
    text: '',
    atext: ''
};

export default (state = dfilterReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text,
        };
      case 'SET_ATEXT_FILTER':
          return {
            ...state,
            atext: action.atext
      };
      default:
        return state;
    }
  };