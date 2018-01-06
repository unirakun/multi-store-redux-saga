import { combineReducers } from 'redux'
import { keyValue } from 'k-redux-factory'

export const contacts = keyValue({ key: 'id', name: 'contacts' })

export default combineReducers({
  contacts,
})
