import { put, select } from 'redux-saga/effects'
import { authorizations } from '../../redux/reducers'

const stubs = [
  {
    id: 1,
    screen: 'contacts',
    read: true,
    write: false,
  },
  {
    id: 2,
    screen: 'cities',
    read: false,
    write: false,
  },
]

export function* load(screen) {
  const initialized = yield select(authorizations.isInitialized)

  if (!initialized) {
    yield put(authorizations.set(stubs))
  }

  // when a screen load, we try to load authorizations if not presents,
  // then we run it to the screen store
  const payload = yield select(authorizations.getAsArray)
  screen.store.dispatch({ type: '@@from-root/SET_AUTHORIZATIONS', payload })
}
