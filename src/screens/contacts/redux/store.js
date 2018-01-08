import factory from 'redux/store.factory'
import sagas from '../sagas'
import * as reducers from './reducers'

const store = factory(reducers)(sagas)('contacts')

export default store
