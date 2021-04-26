const profileReducerDefaultState = {
    phone: '',
    address: '',
    experience: '',
    pdonor: false
  };

  export default (state = profileReducerDefaultState, action) => {
    switch (action.type) {
       case 'SET_PROFILE':
            return {
              ...state,
              phone: action.phone,
              address: action.address,
              experience: action.experience,
              pdonor: action.pdonor
            };
      case 'EDIT_PROFILE':
        return {
          ...state,
          phone: action.phone,
          address: action.address,
          experience: action.experience,
          pdonor: action.pdonor
        };
      case 'REMOVE_PROFILE':
        return {
          ...state,
          phone: '',
          address: '',
          experience: '',
          pdonor: false
        };
      default:
        return state;
    }
  };