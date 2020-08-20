import decode from 'jwt-decode'

const TOKEN_KEY = 'TOKEN'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function saveToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  return localStorage.removeItem(TOKEN_KEY)
}

export function decodeToken(token) {
  return decode(token)
}
