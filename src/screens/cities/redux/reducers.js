import { combineReducers } from 'redux'
import { keyValue, simpleObject } from 'k-redux-factory'

export const cities = keyValue({ key: 'id', name: 'cities' })
export const authorizations = keyValue({ key: 'id', name: 'authorizations' })
export const common = simpleObject({ name: 'common', defaultData: 'CITIES' })

export default combineReducers({
  cities,
  authorizations,
  common,
})
