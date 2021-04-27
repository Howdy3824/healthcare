const profileReducerDefaultState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    experience: '',
    pdonor: false,
    bgroup: '' 
  };

  export default (state = profileReducerDefaultState, action) => {
    switch (action.type) {
       case 'SET_PROFILE':
            return {
              ...state,
              name: action.name,
              email: action.email,
              phone: action.phone,
              address: action.address,
              zip: action.zip,
              experience: action.experience,
              pdonor: action.pdonor,
              bgroup: action.bgroup
            };
      case 'EDIT_PROFILE':
        return {
          ...state,
          name: action.name,
          email: action.email,
          phone: action.phone,
          address: action.address,
          zip: action.zip,
          experience: action.experience,
          pdonor: action.pdonor,
          bgroup: action.bgroup
        };
      case 'REMOVE_PROFILE':
        return {
          ...state,
          name: '',
          email: '',
          phone: '',
          address: '',
          zip: '',
          experience: '',
          pdonor: false,
          bgroup: ''
        };
      default:
        return state;
    }
  };