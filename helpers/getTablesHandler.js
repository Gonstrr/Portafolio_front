import axios from 'axios'
import {DOMAINS} from '../constants/appConstants'
import buildUrl from '../utils/buildService'
import getApiUrl from '../utils/getApiUrl'

const getTablesHandler = async () => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.TABLES).getAllTables)
  const res = await axios(tableApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json'},
  })
  return res
}

export default getTablesHandler
