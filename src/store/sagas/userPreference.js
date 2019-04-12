import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '~/services/api'

import AuthActions from '../ducks/auth'

export function * store ({ preferences }) {
  try {
    const user = yield select(state => state.auth.user)
    yield call(api.post, 'users-preferences', { preferences })
    yield put(AuthActions.getUserSuccess({ ...user, Preferences: preferences }))
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao salvar preferencias',
        message: 'Erro desconhecido'
      })
    )
  }
}
