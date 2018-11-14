export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    //use firebase to signin with email and pass, will take time to do, so use promise
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'SUCCESSFUL_LOGIN'});
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
    });
  }
}

export const signOut = () => {
  return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'});
    })
  }
}
