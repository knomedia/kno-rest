import JRest from './src/jrest'
import getToken from './src/get_token'
import defaultHeaders from './src/default_headers'

JRest.getToken = getToken
JRest.defaultHeaders = defaultHeaders

export default JRest
