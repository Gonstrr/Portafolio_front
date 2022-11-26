const UserInfoForm = ({modalInfo}) => {
  return (
    <ul className="infoUserForm">
      <li>{`ID de Usuario: ${modalInfo.id}`}</li>
      <li>{`Nombre de usuario: ${modalInfo.username}`}</li>
      <li>{`Email de usuario: ${modalInfo.email}`}</li>
      <li>{`Nombre: ${modalInfo.first_name}`}</li>
      <li>{`Apellido: ${modalInfo.last_name}`}</li>
      <li>{`Cargo: ${modalInfo.category}`}</li>
      <li>{`Es Staff: ${modalInfo.is_staff ? 'Sí' : 'No'}`}</li>
    </ul>
  )
}

const DeleteUserInfo = ({username, id}) => {
  return (
    <h1>{`¿Estás seguro que quieres borrar el usuario ${username} con ID ${id}?`}</h1>
  )
}

export {UserInfoForm, DeleteUserInfo}
