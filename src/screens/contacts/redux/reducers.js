import { combineReducers } from 'redux'
import { keyValue, simpleObject } from 'k-redux-factory'

export const contacts = keyValue({ key: 'id', name: 'contacts' })
export const authorizations = keyValue({ key: 'id', name: 'authorizations' })
export const common = simpleObject({ prefix: 'ui', name: 'common', defaultData: 'CONTACTS' })

export default combineReducers({
  contacts,
  authorizations,
  common,
})
