import axios from 'axios'
import {DOMAINS, HTTP_STATUSES} from '../../../constants/appConstants'
import buildUrl from '../../../utils/buildService'
import getApiUrl from '../../../utils/getApiUrl'
import {getCookie} from 'cookies-next'
import getTablesHandler from '../../../helpers/getTablesHandler'
import getProductsHandler from '../../../helpers/getProductsHandler'
import getStatusesHandler from '../../../helpers/getStatusesHandler'

const deleteOrder = (id, actions) => async () => {
  const orderApiUrl = buildUrl(getApiUrl(DOMAINS.ORDERS).deleteOrder, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(orderApiUrl, {
    method: 'DELETE',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.NO_CONTENT) {
    actions.setReloadComponent(true)
  }
}

const fetchOrderInfoHandler = (id, state, actions) => async () => {
  let tables = state.tables
  let products = state.products
  let status = state.statuses
  if (!tables.length) {
    const res = await getTablesHandler()
    tables = res.data
  }
  if (!products.length) {
    const res = await getProductsHandler()
    products = res.data
  }
  if (!status.length) {
    const res = await getStatusesHandler()
    status = res.data
  }
  if (!state.tables.length) actions.setTables(tables)
  if (!state.products.length) actions.setProducts(products)
  if (!state.statuses.length) actions.setStatuses(status)
  const categoryApiUrl = buildUrl(getApiUrl(DOMAINS.ORDERS).getOrder, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(categoryApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })

  const tablesWithSelected = tables.filter((table) => table.id !== res.data.table)
  tablesWithSelected.push({
    ...res.data.table_data,
    selected: true,
  })
  const statusesWithSelected = status.filter((status) => status.id !== res.data.status)
  const statusSelected = status.find((status) => status.id === res.data.status)
  statusesWithSelected.push({
    ...statusSelected,
    selected: true,
  })
  const productsWithSelected = products.filter(
    (table) => !res.data.product_data.includes(table.id),
  )
  tablesWithSelected.push({
    ...res.data.table_data,
    selected: true,
  })
  productsWithSelected.push(
    ...res.data.product_data.map((product) => ({...product, selected: true})),
  )
  const response = {
    data: {
      ...res.data,
      status: statusesWithSelected,
      table: tablesWithSelected,
      product: productsWithSelected,
    },
  }
  return response
}

const updateOrderHandler = (id, actions) => async (data) => {
  const orderApiUrl = buildUrl(getApiUrl(DOMAINS.ORDERS).updateOrder, {id})
  const token = getCookie('JWT_TOKEN')
  const body = {
    status: data.status.id,
    products: data.product.map((product) => product.id),
    table: data.table.id,
  }
  const res = await axios.patch(orderApiUrl, JSON.stringify(body), {
    headers: {'content-type': 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.OK) {
    actions.setReloadComponent(true)
  }
}

const fetchAllOrdersInfoHandler = async () => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.ORDERS).getAllOrders)
  return await axios(tableApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json'},
  })
}

export {fetchOrderInfoHandler, deleteOrder, updateOrderHandler, fetchAllOrdersInfoHandler}
