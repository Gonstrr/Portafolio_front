const OrderInfoForm = ({modalInfo}) => {
  return (
    <ul className="infoOrderForm">
      <li>{`ID pedido: ${modalInfo.id}`}</li>
      <li>{`Fecha de creación: ${modalInfo.created_at}`}</li>
      <li>{`Total de pedido: ${modalInfo.payment}`}</li>
      <li>{`Productos pedidos: ${modalInfo.product_data
        .map((product) => product.title)
        .join(', ')}`}</li>
      <li>{`Estado de Orden: ${modalInfo.close ? 'Cerrada' : 'Activa'}`}</li>
      <li>{`Mesa: ${modalInfo.table_data.number}`}</li>
    </ul>
  )
}

const DeleteOrderInfo = ({title, id}) => {
  return <h1>{`¿Estás seguro que quieres borrar la Orden ${title} con ID ${id}?`}</h1>
}

export {OrderInfoForm, DeleteOrderInfo}
