import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default reducers => sagas => (name) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      /* eslint-env browser */
      window.devToolsExtension ? window.devToolsExtension({ name }) : f => f,
    ),
  )

  sagaMiddleware.run(sagas)

  // connect child redux to the global one (TODO: make it a lib)
  document.dispatchEvent(new CustomEvent('@@alakarte/init-screen', { detail: { name, store } }))

  return store
}
