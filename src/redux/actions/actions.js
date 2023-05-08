import * as types from "./actionTypes";
import { db, auth, googleAuthProvider } from "../../firebase";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSucess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSucess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

// export const setUser = (authUser) => ({
//   type: types.SET_USER,
//   payload: authUser ? authUser.uid : null,
// });


const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSucess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

// export const registerInitiate = (email, password, displayName) => {
//   return function (dispatch) {
//     dispatch(registerStart());
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         user.updateProfile({
//           displayName,
//         });
//         dispatch(registerSucess(user));
//       })
//       .catch((error) => dispatch(registerFail(error.message)));
//   };
// };

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // Update the user's display name
        user.updateProfile({
          displayName,
        });

        // Store the user's information in Firestore
        db.collection('users').doc(user.uid).set({
          displayName,
          email,
        })
        .then(() => {
          dispatch(registerSucess(user));
        })
        .catch((error) => {
          dispatch(registerFail(error.message));
        });
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};



export const loginInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSucess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleAuthProvider());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSucess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};
