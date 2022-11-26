import axios from 'axios'
import React, {useEffect, useState} from 'react'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS} from '../../constants/appConstants'
import OrderItem from './OrderItem'

const Orders = ({state, actions}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [Orders, setOrders] = useState([])
  const {reloadComponent} = state
  useEffect(() => {
    const loadOrders = async () => {
      const tableApiUrl = buildUrl(getApiUrl(DOMAINS.ORDERS).getAllOrders)
      const res = await axios(tableApiUrl, {
        method: 'GET',
        headers: {accept: 'application/json'},
      })
      setIsLoading(false)
      setOrders(res.data)
    }

    if (!Orders.length || reloadComponent) {
      loadOrders()
    }
    if (reloadComponent) actions.setReloadComponent(false)
  }, [Orders.length, reloadComponent])

  if (isLoading) return <div>Loading</div>
  return (
    <div className="is-centered">
      <ul className="border-double border-4 border-sky-200 is-flex is-flex-direction-column">
        {Orders.map(({id, status, created_at, table, payment}, index) => (
          <OrderItem
            id={id}
            status={status}
            created_at={created_at}
            table={table}
            payment={payment}
            key={`tablelink-${index}-${id}`}
            actions={actions}
            state={state}
          />
        ))}
      </ul>
    </div>
  )
}

export default Orders
