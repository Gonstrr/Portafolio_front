import axios from 'axios'
import React, {useEffect, useState} from 'react'
import TableItem from './TableItem'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS} from '../../constants/appConstants'

const Tables = ({state, actions}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [tables, setTables] = useState([])
  const {reloadComponent} = state
  useEffect(() => {
    const loadTables = async () => {
      const tableApiUrl = buildUrl(getApiUrl(DOMAINS.TABLES).getAllTables)
      const res = await axios(tableApiUrl, {
        method: 'GET',
        headers: {accept: 'application/json'},
      })
      setIsLoading(false)
      setTables(res.data)
    }

    if (!tables.length || reloadComponent) {
      loadTables()
    }
    if (reloadComponent) actions.setReloadComponent(false)
  }, [tables.length, reloadComponent])

  if (isLoading) return <div>Loading</div>
  return (
    <div className="is-centered">
      <ul className="border-double border-4 border-sky-200 is-flex is-flex-direction-column">
        {tables.map(({id, number}, index) => (
          <TableItem
            number={number}
            id={id}
            key={`tablelink-${index}-${id}`}
            actions={actions}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tables
