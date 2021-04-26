import database from '../firebase/firebase';

// SET_Profiles
export const setProfiles = (profiles) => ({
    type: 'SET_PROFILES',
    profiles
  });
  
  export const startSetProfiles = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users`).once('value').then((snapshot) => {
        const profiles = [];
        snapshot.forEach((childSnapshot) => {
          profiles.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setProfiles(profiles));
      });
    };
  };