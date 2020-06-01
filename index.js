import KnoRest from './src/kno_rest'
import getToken from './src/get_token'
import defaultHeaders from './src/default_headers'

KnoRest.getToken = getToken
KnoRest.defaultHeaders = defaultHeaders

export default KnoRest
