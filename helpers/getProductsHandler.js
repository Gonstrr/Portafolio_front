import axios from 'axios'
import {DOMAINS} from '../constants/appConstants'
import buildUrl from '../utils/buildService'
import getApiUrl from '../utils/getApiUrl'

const getProductsHandler = async () => {
  const productsApiUrl = buildUrl(getApiUrl(DOMAINS.PRODUCTS).getAllProducts)
  const res = await axios(productsApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json'},
  })
  return res
}

export default getProductsHandler
