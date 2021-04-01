const GET = 'GET'

function buildQuery(payload) {
  return Object.keys(payload).reduce(function(str, key) {
    let amper = ""
    if (str.length > 1) {
      amper = "&"
    }
    str += `${amper}${key}=${payload[key]}`
    return str
  }, '?')
}

function query(url, payload, method) {
  if (payload && GET === method) {
    url += buildQuery(payload)
  }
  return url
}

export default query
