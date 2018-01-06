import sagas from './intents'

function* errorHandlingSagas() {
  try {
    yield sagas()
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.error('saga exception', ex)
  }
}

export default function* () {
  yield errorHandlingSagas()
}
