import { takeLatest } from 'redux-saga/effects'
import * as h from 'sagas/helpers'

export default function* () {
  yield takeLatest('*', h.logger('MAIN'))
}
