import React, {useEffect, useState} from 'react'
import CategoryItem from './CategoryItem'
import {fetchAllCategoriesInfoHandler} from './helpers/categoryHandlers'

const Categories = ({state, actions}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const {reloadComponent} = state
  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchAllCategoriesInfoHandler()
      setIsLoading(false)
      setCategories(res.data)
      actions.setCategories(res.data)
    }

    if (!categories.length || reloadComponent) {
      loadCategories()
    }
    if (reloadComponent) actions.setReloadComponent(false)
  }, [categories.length, reloadComponent])

  if (isLoading) return <div>Loading</div>
  return (
    <div className="is-centered">
      <ul className="border-solid is-responsive is-flex is-flex-direction-column">
        {categories.map(({id, title, image}, index) => (
          <CategoryItem
          
            image={image}
            id={id}
            title={title}
            key={`tablelink-${index}-${id}`}
            actions={actions}
          />
        ))}
      </ul>
    </div>
  )
}

export default Categories
