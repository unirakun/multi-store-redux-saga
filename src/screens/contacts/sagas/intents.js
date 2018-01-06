import { takeLatest } from 'redux-saga/effects'
import * as contacts from './model/contacts'
import * as header from './model/header'

export default function* () {
  yield takeLatest('@@ui/MOUNTED', function* () {
    yield contacts.load()
    yield header.load()
  })
}
