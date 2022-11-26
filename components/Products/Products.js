import axios from 'axios'
import React, {useEffect, useState} from 'react'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS} from '../../constants/appConstants'
import ProductItem from './ProductItem'

const Products = ({state, actions}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const {reloadComponent} = state
  useEffect(() => {
    const loadProducts = async () => {
      const tableApiUrl = buildUrl(getApiUrl(DOMAINS.PRODUCTS).getAllProducts)
      const res = await axios(tableApiUrl, {
        method: 'GET',
        headers: {accept: 'application/json'},
      })
      setIsLoading(false)
      setProducts(res.data)
    }

    if (!products.length || reloadComponent) {
      loadProducts()
    }
    if (reloadComponent) actions.setReloadComponent(false)
  }, [products.length, reloadComponent])

  if (isLoading) return <div>Loading</div>
  return (
    <div className="is-centered">
      <ul className="border-double border-4 border-sky-200 is-flex is-flex-direction-column">
        {products.map(({id, title, image}, index) => (
          <ProductItem
            image={image}
            id={id}
            title={title}
            key={`tablelink-${index}-${id}`}
            actions={actions}
            state={state}
          />
        ))}
      </ul>
    </div>
  )
}

export default Products
