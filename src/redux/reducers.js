import { keyValue, simpleObject } from 'k-redux-factory'

export { reducer as router } from './router'
export const authorizations = keyValue({ name: 'authorizations', key: 'id' })
export const header = simpleObject({ name: 'header', defaultData: '' })
