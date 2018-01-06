import { takeLatest } from 'redux-saga/effects'
import * as cities from './model/cities'

export default function* () {
  yield takeLatest('@@ui/MOUNTED', cities.load)
}
