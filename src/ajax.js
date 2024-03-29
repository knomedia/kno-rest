import getHeaders from './default_headers'
import axios from 'axios'

class Ajax {
  constructor(xhr, headers) {
    this.xhr = xhr || axios
    this.headers = headers || getHeaders
  }
  onError(err) {
    console.log(err)
    console.log('error loading url')
  }
  onSuccess(res) {
    return res.data
  }

  exec(url, method, data) {
    let config = {
      url: url,
      method: method,
      headers: this.headers(),
    }
    if (data) {
      config.data = data
    }
    return this.xhr(config).then(this.onSuccess).catch(this.onError)
  }
}

export default Ajax
