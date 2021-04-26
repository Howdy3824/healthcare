const profilesReducerDefaultState = [];

export default (state = profilesReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_PROFILES':
        return action.profiles.map((data) => {
          return data.profile.experience
        })
      default:
        return state;
    }
  };