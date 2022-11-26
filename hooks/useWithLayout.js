import {Fragment} from 'react'
import Navbar from '../components/Navbar/Navbar'
import {useRestaurantContext} from '../context/restaurantContext'

const useWithLayout = (Component) => {
  const WrappedComponent = (props) => {
    const {state, actions} = useRestaurantContext()
    return (
      <Fragment>
        <Navbar {...props} state={state} actions={actions} />
        <Component {...props} state={state} actions={actions} />
      </Fragment>
    )
  }

  return WrappedComponent
}

export default useWithLayout
