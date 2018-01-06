import { put, select } from 'redux-saga/effects'
import { cities } from '../../redux'

export function* load() {
  const length = yield select(cities.getLength)
  yield put({ type: '@@data/SET_HEADER', payload: `Cities - ${length}` })
}
