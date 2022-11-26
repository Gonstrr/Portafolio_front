import CreateProduct from '../Products/CreateProduct'
import Products from '../Products/Products'

const ProductsComponent = (props) => {
  return (
    <div id="productComponent" className="panel has-background-white p-5 m-5">
      <CreateProduct {...props} />
      <Products {...props} />
    </div>
  )
}

export default ProductsComponent
