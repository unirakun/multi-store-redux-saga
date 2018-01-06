import { takeLatest, put } from 'redux-saga/effects'
import * as cities from './model/cities'
import { authorizations } from '../redux'

export default function* () {
  yield takeLatest('@@ui/MOUNTED', cities.load)

  yield takeLatest('@@from-root/SET_AUTHORIZATIONS', function* (action) {
    yield put(authorizations.set(action.payload))
  })
}
