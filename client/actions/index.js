import {register as apiRegister} from '../api/auth'
import { saveToken, decodeToken } from '../utils/auth';

export function register(username, password) {
  return dispatch => {
    return apiRegister(username, password)
      .then(details => {
        saveToken(details.token)
        const user = decodeToken(details.token)
        dispatch(saveAuthUser(user))
      })
  }
}

export function saveAuthUser(user) {
  return {
    type: 'SAVE_AUTH_USER',
    user
  }
}
