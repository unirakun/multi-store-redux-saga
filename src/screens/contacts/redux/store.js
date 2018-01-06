import factory from 'redux/store.factory'
import reducers from './reducers'

const store = factory(reducers)('contacts')

export default store
