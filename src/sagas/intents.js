import { takeLatest } from 'redux-saga/effects'
import * as authorizations from './model/authorizations'

export default function* () {
  // from all screens
  yield takeLatest('@@ui/MOUNTED', action => authorizations.load(action.screen))

  yield takeLatest(
    action => action.screen && action.screen.name === 'contacts',
    action => console.log('action from contacts catched to root', action),
  )
}
