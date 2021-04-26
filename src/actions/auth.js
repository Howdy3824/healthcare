import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, name, email) => ({
  type: 'LOGIN',
  uid,
  name,
  email
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
