import {DOMAINS} from '../constants/appConstants'
import buildUrl from '../utils/buildService'
import getApiUrl from '../utils/getApiUrl'

const getPaymentsHandler = async () => {
  // const paymentsApiUrl = buildUrl(getApiUrl(DOMAINS.PAYMENTS).getAllPayments)
  // return await axios(paymentsApiUrl, {
  //   method: 'GET',
  //   headers: {accept: 'application/json'},
  // })
  return {
    data: [
      {id: 1, title: 'CARD'},
      {id: 2, title: 'CREDIT'},
      {id: 3, title: 'CASH'},
    ],
  }
}

export default getPaymentsHandler
