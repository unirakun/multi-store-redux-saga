import { takeLatest } from 'redux-saga/effects'
import * as h from 'sagas/helpers'

export default function* () {
  // TODO : remove it after the first intent,
  // because we can follow multiple store into redux-dev-tools already
  yield takeLatest('*', h.logger('MAIN'))
}
