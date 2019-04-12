import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '~/services/api'

import AuthActions from '../ducks/auth'

export function * update ({ user }) {
  try {
    yield call(api.put, 'users', { ...user })
    yield put(AuthActions.getUserSuccess(user))

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Usuario',
        message: 'Atualizado com sucesso',
        options: { closeOnToastrClick: true }
      })
    )

    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao salvar usuarios',
        message: 'Erro desconhecido'
      })
    )
  }
}
