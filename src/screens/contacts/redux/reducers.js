import { combineReducers } from 'redux'
import { keyValue } from 'k-redux-factory'

export const contacts = keyValue({ key: 'id', name: 'contacts' })
export const authorizations = keyValue({ key: 'id', name: 'authorizations' })

export default combineReducers({
  contacts,
  authorizations,
})
