import database from '../firebase/firebase';

// EDIT_PROFILE
export const editProfile = (profile) => ({
  type: 'EDIT_PROFILE',
  ...profile
});

export const startEditProfile = (profileData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      email = '',
      phone = '',
      address = '',
      zip = '',
      experience = '',
      pdonor = false,
      bgroup = ''
    } = profileData;
    const profile = { name, email, phone, address, zip, experience, pdonor, bgroup };
    database.ref(`users/${uid}/profile`).set(profile).then((ref) => {
      dispatch(editProfile(profile));
    });
  };
};

// SET_PROFILE
export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    ...profile
  });
  
  export const startSetProfile = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/profile`).once('value').then((snapshot) => {
        const profile = snapshot.val();
        dispatch(setProfile(profile));
      });
    };
  };

// REMOVE_Profile
export const removeProfile = () => ({
  type: 'REMOVE_PROFILE'
});

export const startRemoveProfile = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/profile`).remove().then(() => {
      dispatch(removeProfile());
    });
  };
};
