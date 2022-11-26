import axios from 'axios'
import {DOMAINS, HTTP_STATUSES} from '../../../constants/appConstants'
import buildUrl from '../../../utils/buildService'
import getApiUrl from '../../../utils/getApiUrl'
import {getCookie} from 'cookies-next'

const deleteCategory = (id, actions) => async () => {
  const categoryApiUrl = buildUrl(getApiUrl(DOMAINS.CATEGORIES).deleteCategory, {id})
  const token = getCookie('JWT_TOKEN')
  const res = await axios(categoryApiUrl, {
    method: 'DELETE',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.NO_CONTENT) {
    actions.setReloadComponent(true)
  }
}

const fetchCategoryInfoHandler = (id) => async () => {
  const categoryApiUrl = buildUrl(getApiUrl(DOMAINS.CATEGORIES).getCategory, {id})
  const token = getCookie('JWT_TOKEN')
  return await axios(categoryApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
  })
}

const updateCategoryHandler = (id, actions) => async (data) => {
  const categoryApiUrl = buildUrl(getApiUrl(DOMAINS.CATEGORIES).updateCategory, {id})
  const token = getCookie('JWT_TOKEN')
  const formData = new FormData()
  if (data.image.length) {
    formData.append('image', data.image.item(0))
  }
  formData.append('title', data.title)
  const res = await axios.patch(categoryApiUrl, formData, {
    headers: {'content-type': 'multipart/form-data', Authorization: `Bearer ${token}`},
  })
  if (res.status === HTTP_STATUSES.OK) {
    actions.setReloadComponent(true)
  }
}

const fetchAllCategoriesInfoHandler = async () => {
  const tableApiUrl = buildUrl(getApiUrl(DOMAINS.CATEGORIES).getAllCategories)
  return await axios(tableApiUrl, {
    method: 'GET',
    headers: {accept: 'application/json'},
  })
}

export {
  fetchCategoryInfoHandler,
  deleteCategory,
  updateCategoryHandler,
  fetchAllCategoriesInfoHandler,
}
