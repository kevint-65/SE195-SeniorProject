//create initial state
const initState = {
  authError: null
}

//create reducer for authentication, passing in initial state of reducer
const authReducer = (state = initState, action) => {

  //use switch to determine what to do in certain types
  switch(action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'SUCCESSFUL_LOGIN':
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      return state;
      
    default:
      return state
  }
}

export default authReducer
