import axios from 'axios'
import {DOMAINS, HTTP_STATUSES} from '../../../constants/appConstants'
import buildUrl from '../../../utils/buildService'
import getApiUrl from '../../../utils/getApiUrl'
import {getCookie} from 'cookies-next'
import {fetchAllCategoriesInfoHandler} from '../../Categories/helpers/categoryHandlers'

const deleteProduct = (id, actions) => async () => {
  const productApiUrl = buildUrl(getApiUrl(DOMAINS.PRODUCTS).deleteProduct, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(productApiUrl, {
    method: 'DELETE',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.NO_CONTENT) {
    actions.setReloadComponent(true)
  }
}

const fetchProductInfoHandler = (id, state, actions) => async () => {
  let category = state.categories
  if (!category.length) {
    const res = await fetchAllCategoriesInfoHandler()
    category = res.data
  }
  if (!state.categories.length) actions.setCategories(category)
  const productApiUrl = buildUrl(getApiUrl(DOMAINS.PRODUCTS).getProduct, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(productApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  const categoryWithSelected = category.filter(
    (category) => category.id !== res.data.category_data.id,
  )
  categoryWithSelected.push({
    ...res.data.category_data,
    selected: true,
  })
  return {
    data: {
      ...res.data,
      category: categoryWithSelected,
    },
  }
}

const updateProductHandler = (id, actions) => async (data) => {
  const productApiUrl = buildUrl(getApiUrl(DOMAINS.PRODUCTS).updateProduct, {id})
  const token = getCookie('JWT_TOKEN')
  const formData = new FormData()
  if (data.image.length) {
    formData.append('image', data.image.item(0))
  }
  formData.append('title', data.title)
  formData.append('price', data.price)
  formData.append('category', data.category.id)
  const res = await axios.patch(productApiUrl, formData, {
    headers: {'content-type': 'multipart/form-data', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.OK) {
    actions.setReloadComponent(true)
  }
}

export {fetchProductInfoHandler, deleteProduct, updateProductHandler}
