class Routes {
  constructor(endpoint, xhr) {
    this.endpoint = endpoint
  }

  buildRoute(base, action) {
    let path = base
    if (action) {
      path = `${path}/${action}`
    }
    return path
  }

  member(id, action, endpoint) {
    endpoint = endpoint || this.endpoint
    let path = `${endpoint}/${id}`
    return this.buildRoute(path, action)
  }

  collection(action, endpoint) {
    endpoint = endpoint || this.endpoint
    let path = endpoint
    return this.buildRoute(path, action)
  }
}

export default Routes
