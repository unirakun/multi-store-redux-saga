import { takeLatest } from 'redux-saga/effects'
import * as authorizations from './model/authorizations'
import * as header from './model/header'

export default function* () {
  // from all screens
  yield takeLatest('@@ui/MOUNTED', action => authorizations.load(action.screen))

  // set header
  yield takeLatest('@@data/SET_HEADER', action => header.setText(action.payload))

  // Example, filter on a specific screen
  /* yield takeLatest(
    action => action.screen && action.screen.name === 'contacts',
    action => console.log('action from contacts catched to root', action),
  ) */
}
