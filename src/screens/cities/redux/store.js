import factory from 'redux/store.factory'
import reducers from './reducers'

const store = factory(reducers)('cities')

export default store
