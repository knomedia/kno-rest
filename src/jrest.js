import getHeaders from './default_headers'
import axios from 'axios'

const GET = 'GET'
const POST = 'POST'
const DELETE = 'DELETE'
const PUT = 'PUT'

function memberRoute(ep, id) {
  return `${ep}/${id}`
}

class JRest {
  constructor(endpoint, xhr) {
    this.endpoint = endpoint
    this.xhr = xhr || axios
  }

  index() {
    let url = this.endpoint
    let method = GET
    return this.xhr({
      url: url,
      method: method,
      headers: getHeaders(),
    }).then((res) => {
      return res.data
    }).catch((err) => {
      console.log('error loading from', url)
    })
  }

  create(params) {
    let url = this.endpoint
    let method = POST
    return this.xhr({
      url: url,
      method: method,
      headers: getHeaders(),
      data: params,
    }).then((res) => {
      return res.data
    }).catch((err) => {
      console.log('error creating from', url)
    })
  }

  show(id) {
    let url = memberRoute(this.endpoint, id)
    let method = GET
    return this.xhr({
      url: url,
      method: method,
      headers: getHeaders(),
    }).then((res) => {
      return res.data
    }).catch((err) => {
      console.log(err)
      console.log('error loading from', url)
    })
  }

  update(item, name) {
    let data = {}
    data[name] = Object.assign({}, item)
    let url = memberRoute(this.endpoint, item.id)
    let method = PUT
    return this.xhr({
      url: url,
      method: method,
      headers: getHeaders(),
      data: data,
    }).then((res) => {
      return res.data
    }).catch((err) => {
      console.log('error updating', url, data)
    })
  }

  destroy(id) {
    let url = memberRoute(this.endpoint, id)
    let method = DELETE
    return this.xhr({
      url: url,
      method: method,
      headers: getHeaders(),
    }).then((res) => {
      return true
    }).catch((err) => {
      console.log('error destroying', url)
      return false
    })
  }
}

export default JRest
