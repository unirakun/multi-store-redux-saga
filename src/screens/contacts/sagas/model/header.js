import { put, select } from 'redux-saga/effects'
import { contacts } from '../../redux'

export function* load() {
  const length = yield select(contacts.getLength)
  yield put({ type: '@@data/SET_HEADER', payload: `Contacts - ${length}` })
}
