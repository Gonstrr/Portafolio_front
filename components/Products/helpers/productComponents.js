const ProductInfoForm = ({modalInfo}) => {
  return (
    <ul className="infoProductForm">
      <li>{`ID de Producto: ${modalInfo.id}`}</li>
      <li>{`Título de Producto: ${modalInfo.title}`}</li>
      <li>{`Precio de Producto: ${modalInfo.price}`}</li>
      <li>{`Categoría de Producto: ${modalInfo.category_data.title}`}</li>
      <li>{`Estado de Producto: ${modalInfo.active ? 'Activo' : 'Inactivo'}`}</li>
      <li>
        {'Imágen: \n'}
        <img src={modalInfo.image} className="w-full" alt="Product image" />
      </li>
    </ul>
  )
}

const DeleteProductInfo = ({title, id}) => {
  return <h1>{`¿Estás seguro que quieres borrar el Producto ${title} con ID ${id}?`}</h1>
}

export {ProductInfoForm, DeleteProductInfo}
