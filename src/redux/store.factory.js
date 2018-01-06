import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// TODO: make it a lib
const dispatchToRoot = name => store => next => (action) => {
  // dispatch event to the document
  // - the root redux can catch it
  if (!/@@from-root\/.*/.test(action.type)) {
    document.dispatchEvent(new CustomEvent('@@alakarte/children-event', { detail: { name, store, action } }))
  }

  // dispatch event to the local redux
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

  // dispatch events to register screen to root
  store.dispatch({ type: '@@alakarte/register' })

  return store
}
