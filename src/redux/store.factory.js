import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// TODO: make it a lob
// TODO: find a cleaner way to reach the root store
// TODO: come back to a eventListener ?
const dispatchToRoot = name => store => next => (action) => {
  window.rootStore.dispatch({ ...action, screen: { name, store } })
  return next(action)
}

export default reducers => sagas => (name) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(dispatchToRoot(name), sagaMiddleware),
      /* eslint-env browser */
      window.devToolsExtension ? window.devToolsExtension({ name }) : f => f,
    ),
  )

  sagaMiddleware.run(sagas)

  return store
}
