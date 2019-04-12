import { call, put, all } from 'redux-saga/effects'
import api from '~/services/api'
import DashboardActions from '../ducks/dashboard'

export function * load () {
  const [
    { data: unregisteredsMeetups },
    { data: subscribesMeetups },
    { data: unregisteredsPreferenceMeetups }
  ] = yield all([
    call(api.get, '/unregistereds-meetups'),
    call(api.get, '/subscribes'),
    call(api.get, '/unregistereds-meetups-preference')
  ])

  yield put(
    DashboardActions.loadDashboardSuccess(
      unregisteredsMeetups,
      subscribesMeetups,
      unregisteredsPreferenceMeetups
    )
  )
}
