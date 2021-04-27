const profilesReducerDefaultState = [];

export default (state = profilesReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_PROFILES':
        return action.profiles.map((data) => {
          return {
            name: data.profile.name,
            email: data.profile.email,
            phone: data.profile.phone,
            address: data.profile.address,
            zip: data.profile.zip,
            experience: data.profile.experience,
            pdonor: data.profile.pdonor,
            bgroup: data.profile.bgroup
          }
        })
      default:
        return state;
    }
  };