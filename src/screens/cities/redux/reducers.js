import { combineReducers } from 'redux'
import { keyValue } from 'k-redux-factory'

export const cities = keyValue({ key: 'id', name: 'cities' })
export const authorizations = keyValue({ key: 'id', name: 'authorizations' })

export default combineReducers({
  cities,
  authorizations,
})
