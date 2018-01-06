import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import { enhancer, middleware } from './router'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    enhancer,
    applyMiddleware(middleware, sagaMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension({ name: 'root' }) : f => f,
  ),
)

sagaMiddleware.run(sagas)

// connect root redux to the global one (TODO: make it a lib)
document.dispatchEvent(new CustomEvent('@@alakarte/init-screen', { detail: { name: 'root', store } }))

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
