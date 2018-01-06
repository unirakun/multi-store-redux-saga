import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import { enhancer, middleware as routerMiddleware } from './router'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

// TODO: make it a lib
// this middleware filters root event so it doesn't come back
// to root event listener (redux dispatch)
// maybe this middleware should be kicked off after we come back to document.eventListener
// instead of global variable
const filterRootEvents = () => next => (action) => {
  if (!/@@from-root\/.*/.test(action.type)) return next(action)
  return undefined
}

const store = createStore(
  reducers,
  compose(
    enhancer,
    applyMiddleware(filterRootEvents, routerMiddleware, sagaMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension({ name: 'root' }) : f => f,
  ),
)

sagaMiddleware.run(sagas)

// root store to global scope
window.rootStore = store

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
