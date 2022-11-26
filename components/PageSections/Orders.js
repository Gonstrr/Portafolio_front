import CreateOrder from '../Orders/CreateOrder'
import Orders from '../Orders/Orders'

const OrdersComponent = (props) => {
  return (
    <div id="orderComponent" className="panel has-background-white p-5 m-5">
      <CreateOrder {...props} />
      <Orders {...props} />
    </div>
  )
}

export default OrdersComponent
