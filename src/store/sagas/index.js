import { all, takeLatest, fork } from 'redux-saga/effects'

import { AuthTypes } from '../ducks/auth'
import { UserPreferenceTypes } from '../ducks/userPreference'
import { UserTypes } from '../ducks/user'
import { MeetupTypes } from '../ducks/meetup'
import { DashboardTypes } from '../ducks/dashboard'

import { signIn, signOut, signUp, getUser } from './auth'
import { store as userPreferenceStore } from './userPreference'
import { update as userUpdate } from './user'
import { store as meetupStore, subscribe as meetupSubscribe } from './meetup'
import { load as dashboardLoad } from './dashboard'

export default function * rootSaga () {
  return yield all([
    fork(getUser),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(
      UserPreferenceTypes.STORE_PREFERENCE_REQUEST,
      userPreferenceStore
    ),
    takeLatest(UserTypes.SAVE_USER_REQUEST, userUpdate),
    takeLatest(MeetupTypes.SAVE_MEETUP_REQUEST, meetupStore),
    takeLatest(MeetupTypes.SUBSCRIBE_MEETUP_REQUEST, meetupSubscribe),
    takeLatest(DashboardTypes.LOAD_DASHBOARD_REQUEST, dashboardLoad)
  ])
}
