import { takeLatest, put } from 'redux-saga/effects'
import * as cities from './model/cities'
import * as header from './model/header'
import { authorizations } from '../redux'

export default function* () {
  yield takeLatest('@@ui/MOUNTED', function* () {
    yield cities.load()
    yield header.load()
  })

  yield takeLatest('@@from-root/SET_AUTHORIZATIONS', function* (action) {
    yield put(authorizations.set(action.payload))
  })
}
