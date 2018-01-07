import { combineReducers } from 'redux'
import { keyValue, simpleObject } from 'k-redux-factory'
import { reducer as router } from './router'

export const authorizations = keyValue({ name: 'authorizations', key: 'id' })
export const header = simpleObject({ name: 'header', defaultData: '' })
export const common = simpleObject({ name: 'common', defaultData: 'ROOT' })

export default combineReducers({
  router,
  authorizations,
  header,
  common,
})
