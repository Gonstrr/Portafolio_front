import axios from 'axios'
import {getCookie} from 'cookies-next'
import {DOMAINS, HTTP_STATUSES} from '../constants/appConstants'
import buildUrl from './buildService'
import getApiUrl from './getApiUrl'

const verifySession = async ({req, res}) => {
  const authUrlApi = buildUrl(getApiUrl(DOMAINS.AUTH).verifySession)
  const token = getCookie('JWT_TOKEN', {req, res})
  const response = await axios(authUrlApi, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (response.status !== HTTP_STATUSES.OK) {
    return {
      isValid: false,
    }
  }
  
  if (response.data) {
    return {
      ...response.data,
      isValid: true,
    }
  }
}

export {verifySession}
