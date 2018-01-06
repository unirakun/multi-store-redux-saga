import { put } from 'redux-saga/effects'
import { header } from '../../redux/reducers'

export function* setText(text) {
  yield put(header.set(text))
}
