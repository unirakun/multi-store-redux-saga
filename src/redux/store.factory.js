import { createStore, compose } from 'redux'

const store = reducers => name => createStore(
  reducers,
  compose(
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension({ name }) : f => f,
  ),
)

export default store
