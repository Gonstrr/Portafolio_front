import axios from 'axios'
import {DOMAINS, HTTP_STATUSES} from '../../../constants/appConstants'
import buildUrl from '../../../utils/buildService'
import getApiUrl from '../../../utils/getApiUrl'
import {getCookie} from 'cookies-next'
import {cleanupObject} from '../../../utils/cleanupObject'

const deleteUser = (id, actions) => async () => {
  const userApiUrl = buildUrl(getApiUrl(DOMAINS.USERS).deleteUser, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(userApiUrl, {
    method: 'DELETE',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.NO_CONTENT) {
    actions.setReloadComponent(true)
  }
}

const fetchUserInfoHandler = (id) => async () => {
  const userApiUrl = buildUrl(getApiUrl(DOMAINS.USERS).getUser, {id})
  const token = getCookie('JWT_TOKEN')
  return await axios(userApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
}

const updateUserHandler = (id, actions) => async (data) => {
  const userApiUrl = buildUrl(getApiUrl(DOMAINS.USERS).updateUser, {id})
  const cleanData = cleanupObject(data)
  const token = getCookie('JWT_TOKEN')
  const res = await axios.patch(userApiUrl, cleanData, {
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.OK) {
    actions.setReloadComponent(true)
  }
}

export {fetchUserInfoHandler, deleteUser, updateUserHandler}
