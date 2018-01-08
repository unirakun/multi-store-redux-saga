import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

// TODO: make it a lib
const dispatchToRoot = name => store => next => (action) => {
  // dispatch event to the document
  // - the root redux can catch it
  if (!/@@from-root\/.*/.test(action.type)) {
    const event = new CustomEvent('@@alakarte/children-event', { detail: { name, store, action } })
    document.dispatchEvent(event)
  }

  // dispatch event to the local redux
  return next(action)
}

export default reducers => sagas => (name) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers(reducers),
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
