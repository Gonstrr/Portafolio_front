const CategoryInfoForm = ({modalInfo}) => {
  return (
    <ul className="infoCategoryForm">
      <li>{`ID de Categoría: ${modalInfo.id}`}</li>
      <li>{`Título de Categoría: ${modalInfo.title}`}</li>
      <li>
        {'Imágen: \n'}
        <img src={modalInfo.image} className="w-full" alt="Category image" />
      </li>
    </ul>
  )
}

const DeleteCategoryInfo = ({title, id}) => {
  return <h1>{`¿Estás seguro que quieres borrar la Categoría ${title} con ID ${id}?`}</h1>
}

export {CategoryInfoForm, DeleteCategoryInfo}
