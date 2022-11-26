import {DOMAINS, FORMS_INPUTS} from '../../../constants/appConstants'
import {fetchAllCategoriesInfoHandler} from '../../Categories/helpers/categoryHandlers'

const getCreateProductProps = async (state, actions) => {
  const initialProps = FORMS_INPUTS[DOMAINS.PRODUCTS]
  let categoriesProps = state.categories
  if (!categoriesProps.length) {
    const res = await fetchAllCategoriesInfoHandler()
    categoriesProps = res.data
  }
  if (!state.categories.length) actions.setCategories(categoriesProps)
  return {
    ...initialProps,
    props: {
      ...initialProps.props,
      category: {
        ...initialProps.props.category,
        initialValue: categoriesProps,
      },
    },
  }
}

export {getCreateProductProps}
