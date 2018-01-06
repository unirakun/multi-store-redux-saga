// TODO: make it a lib

// all events are going to the root store event listener (root redux)
const dispatch = options => (action, ...args) => {
  const { screens, screen, oldDispatch } = options

  // old dispatch
  oldDispatch(action, ...args)

  // root redux (and redux-saga) recieve all actions from children + screen information
  screens.root.store.dispatch({ ...action, screen })
}

// registration
const screens = {}
document.addEventListener('@@alakarte/init-screen', (e) => {
  const screen = e.detail
  const { store, name } = screen

  // register screens
  screens[name] = screen

  // override dispatch
  if (name !== 'root') {
    store.dispatch = dispatch({ screens, screen, oldDispatch: store.dispatch })
  }
})
