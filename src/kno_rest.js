import Routes from './routes'
import Ajax from './ajax'

const GET = 'GET'
const POST = 'POST'
const DELETE = 'DELETE'
const PUT = 'PUT'

class KnoRest {
  constructor(endpoint, xhr) {
    this.routes = new Routes(endpoint)
    this.ajax = new Ajax(xhr)
  }

  collection(method, data, action) {
    let url = this.routes.collection(action)
    return this.ajax.exec(url, method, data)
  }

  member(method, id, data, action) {
    let url = this.routes.member(id, action)
    return this.ajax.exec(url, method, data)
  }

  index() {
    return this.collection(GET)
  }

  create(payload) {
    return this.collection(POST, payload)
  }

  show(id) {
    return this.member(GET, id)
  }

  update(id, payload) {
    return this.member(PUT, id, payload)
  }

  destroy(id) {
    return this.member(DELETE, id)
  }
}

export default KnoRest
