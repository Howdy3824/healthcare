const profilesReducerDefaultState = [];

export default (state = profilesReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_PROFILES':
        return action.profiles.map((data) => {
          return {
            phone: data.profile.phone,
            address: data.profile.address,
            experience: data.profile.experience,
            pdonor: data.profile.pdonor
          }
        })
      default:
        return state;
    }
  };