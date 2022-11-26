import {DOMAINS, FORMS_INPUTS} from '../../../constants/appConstants'
import getPaymentsHandler from '../../../helpers/getPaymentsHandler'
import getProductsHandler from '../../../helpers/getProductsHandler'
import getStatusesHandler from '../../../helpers/getStatusesHandler'
import getTablesHandler from '../../../helpers/getTablesHandler'

const getCreateOrderProps = async (state, actions) => {
  const initialProps = FORMS_INPUTS[DOMAINS.ORDERS]
  let statusesProps = state.statuses
  let productProps = state.products
  let tablesProps = state.tables
  if (!productProps.length) {
    const resProducts = await getProductsHandler()
    productProps = resProducts.data
  }
  if (!statusesProps.length) {
    const resStatuses = await getStatusesHandler()
    statusesProps = resStatuses.data
  }
  if (!tablesProps.length) {
    const resTables = await getTablesHandler()
    tablesProps = resTables.data
  }
  if (!state.statuses.length) actions.setStatuses(statusesProps)
  if (!state.tables.length) actions.setTables(tablesProps)
  if (!state.products.length) actions.setProducts(productProps)

  return {
    ...initialProps,
    props: {
      ...initialProps.props,
      table: {
        ...initialProps.props.table,
        initialValue: tablesProps,
      },
      product: {
        ...initialProps.props.product,
        initialValue: productProps,
      },
      status: {
        ...initialProps.props.status,
        initialValue: statusesProps,
      },
    },
  }
}

export {getCreateOrderProps}
