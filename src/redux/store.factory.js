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

  return store
}
