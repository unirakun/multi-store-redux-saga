import { takeLatest } from 'redux-saga/effects'
import * as h from 'sagas/helpers'
import * as cities from './model/cities'

export default function* () {
  yield takeLatest(h.checkLocation('CITIES'), cities.load)
}
