import constate from 'constate'
import {restaurantInitialState} from '../reducers/restaurant/RestaurantConfig'
import {useActions} from '../reducers/restaurant/RestaurantReducer'

const RestaurantContextProvider = () => {
  return useActions(restaurantInitialState)
}

const [RestaurantContext, useRestaurantContext] = constate(RestaurantContextProvider)
export {RestaurantContext, useRestaurantContext}
