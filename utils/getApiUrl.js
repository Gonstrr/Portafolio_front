import authApis from '../constants/apis/auth'
import categoriesApis from '../constants/apis/categories'
import ordersApis from '../constants/apis/orders'
import paymentsApis from '../constants/apis/payments'
import productsApis from '../constants/apis/products'
import tablesApis from '../constants/apis/tables'
import usersApis from '../constants/apis/users'
import {DOMAINS} from '../constants/appConstants'

const getApiUrl = (domain) => {
  const DOMAIN_MAPPERS = {
    [DOMAINS.CATEGORIES]: categoriesApis,
    [DOMAINS.TABLES]: tablesApis,
    [DOMAINS.USERS]: usersApis,
    [DOMAINS.PAYMENTS]: paymentsApis,
    [DOMAINS.PRODUCTS]: productsApis,
    [DOMAINS.ORDERS]: ordersApis,
    [DOMAINS.AUTH]: authApis,
  }
  return DOMAIN_MAPPERS[domain]
}

export default getApiUrl
