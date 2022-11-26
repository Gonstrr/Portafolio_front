import axios from 'axios'
import React, {useEffect, useState} from 'react'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS} from '../../constants/appConstants'
import UserItem from './UserItem'

const Users = ({state, actions}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const {reloadComponent} = state
  useEffect(() => {
    const loadUsers = async () => {
      const usersApiUrl = buildUrl(getApiUrl(DOMAINS.USERS).getAllUsers)
      const res = await axios(usersApiUrl, {
        method: 'GET',
        headers: {accept: 'application/json'},
      })
      setIsLoading(false)
      setUsers(res.data)
    }

    if (!users.length || reloadComponent) {
      loadUsers()
    }
    if (reloadComponent) actions.setReloadComponent(false)
  }, [users.length, reloadComponent])

  if (isLoading) return <div>Loading</div>
  return (
    <div className="is-centered">
      <ul className="border-double border-4 border-sky-200 is-flex is-flex-direction-column">
        {users.map(({id, username}, index) => (
          <UserItem
            username={username}
            id={id}
            key={`tablelink-${index}-${id}`}
            actions={actions}
          />
        ))}
      </ul>
    </div>
  )
}

export default Users
