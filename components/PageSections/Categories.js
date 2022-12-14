import Categories from '../Categories/Categories'
import CreateCategory from '../Categories/CreateCategory'

const CategoriesComponent = (props) => {
  return (
    <div id="categoryComponent" className="panel has-background-white p-2">
      <CreateCategory {...props} />
      <Categories {...props} />
    </div>
  )
}

export default CategoriesComponent
