import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '~/services/api'

import AuthActions from '../ducks/auth'

export function * signIn ({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password })

    localStorage.setItem('@Meetup:token', response.data.token)
    yield put(
      AuthActions.signInSuccess(response.data.token, response.data.user)
    )
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha!'
      })
    )
  }
}

export function * signUp ({ name, email, password }) {
  try {
    yield call(api.post, 'users', { name, email, password })
    const response = yield call(api.post, 'sessions', { email, password })
    localStorage.setItem('@Meetup:token', response.data.token)
    yield put(
      AuthActions.signInSuccess(response.data.token, response.data.user)
    )
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'E-mail ja cadastrado'
      })
    )
  }
}

export function * signOut () {
  localStorage.removeItem('@Meetup:token')

  yield put(push('/signin'))
}

export function * getUser () {
  const signedIn = yield select(state => state.auth.signedIn)

  if (!signedIn) {
    return
  }

  const response = yield call(api.get, `users/${1}`)

  const { data: user } = response
  yield put(AuthActions.getUserSuccess(user))
}
