import request from 'superagent'

export function register(username, password) {
  return request
    .post('/api/v1/auth/register')
    .send({username, password})
    .then(res => res.body)
}