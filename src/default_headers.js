import getToken from './get_token'

export default function defaultHeaders(token) {
  token = token || getToken
  return {
    'X-CSRF-Token': token(),
    'Accept': 'application/json'
  }
}
