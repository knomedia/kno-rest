import getToken from './get_token'

export default function defaultHeaders() {
  return {
    'X-CSRF-Token': getToken(),
    'Accept': 'application/json'
  }
}
