import { combineReducers } from 'redux'
import { keyValue } from 'k-redux-factory'

export const cities = keyValue({ key: 'id', name: 'cities' })

export default combineReducers({
  cities,
})
