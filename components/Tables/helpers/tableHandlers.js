import axios from 'axios'
import {DOMAINS, HTTP_STATUSES} from '../../../constants/appConstants'
import buildUrl from '../../../utils/buildService'
import getApiUrl from '../../../utils/getApiUrl'
import {getCookie} from 'cookies-next'

const deleteTable = (id, actions) => async () => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.TABLES).deleteTable, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(tableApiUrl, {
    method: 'DELETE',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.NO_CONTENT) {
    actions.setReloadComponent(true)
  }
}

const fetchTableInfoHandler = (id) => async () => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.TABLES).getTable, {id})
  const token = getCookie('JWT_TOKEN')
  return await axios(tableApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
}

const updateTableHandler = (id, actions) => async (data) => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.TABLES).updateTable, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios.put(tableApiUrl, data, {
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.OK) {
    actions.setReloadComponent(true)
  }
}

export {fetchTableInfoHandler, deleteTable, updateTableHandler}
