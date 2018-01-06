import { takeLatest } from 'redux-saga/effects'
import * as h from 'sagas/helpers'
import * as contacts from './model/contacts'

export default function* () {
  yield takeLatest(h.checkLocation('CONTACTS'), contacts.load)
}
