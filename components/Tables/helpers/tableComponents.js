const TableInfoForm = ({modalInfo}) => {
  
  return (
    <ul className="infoTableForm" class="">
      <li>{`ID de Mesa: ${modalInfo.id}`}</li>
      <li>{`Numero de Mesa: ${modalInfo.number}`}</li>
    </ul>
  )
}

const DeleteTableInfo = ({number, id}) => {
  return <h1>{`¿Estás seguro que quieres borrar la Mesa ${number} con ID ${id}?`}</h1>
}

export {TableInfoForm, DeleteTableInfo}
