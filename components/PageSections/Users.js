import CreateUser from '../Users/CreateUser'
import Users from '../Users/Users'

const UsersComponent = (props) => {
  return (
    <div id="usersComponent" className="panel has-background-white p-2">
      <CreateUser {...props} />
      <Users {...props} />
    </div>
  )
}

export default UsersComponent
