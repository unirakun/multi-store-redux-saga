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

// listen to children event and dispatch them to the local redux (root)
const stores = {}
document.addEventListener('@@alakarte/children-event', (e) => {
  const screen = e.detail
  const { action, name } = screen

  // register children store (so root can communicate with all if necessary)
  stores[name] = screen.store

  // dispatch the action, adding current screen and all stores
  store.dispatch({ ...action, screen, stores })
})

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
