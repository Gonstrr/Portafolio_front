import {RestaurantContext} from '../context/restaurantContext'

const useWithContext = (Component) => {
  /**
   * Componente que estará entre la navegación y el footer
   */
  const WrappedComponent = (props) => {
    return (
      <RestaurantContext>
        <Component {...props} />
      </RestaurantContext>
    )
  }
  return WrappedComponent
}

export default useWithContext
