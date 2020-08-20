const initialState = { 
    loggedIn: false
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SAVE_AUTH_USER':
        return {
          loggedIn: true,
          user: action.user
        }
      default:
        return state
    }
  }
  
  export default reducer
  