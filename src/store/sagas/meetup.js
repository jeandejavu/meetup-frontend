import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '~/services/api'
import MeetupActions from '../ducks/meetup'

export function * store ({ meetup }) {
  try {
    const { data: meetupPost } = yield call(api.post, 'meetups', { ...meetup })

    const formData = new FormData()
    meetup.files.map((file, index) => formData.append('file', file, file.name))
    formData.append('id', meetupPost.id)
    yield call(api.post, 'meetups-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Meetup',
        message: 'Inserido com sucesso',
        options: { closeOnToastrClick: true }
      })
    )

    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao criar meetup',
        message: 'Erro desconhecido'
      })
    )
  }
}

export function * show ({ id }) {
  const response = yield call(api.get, `meetups/${id}`)

  const { data } = response
  yield put(MeetupActions.showMeetupSuccess(data))
  yield put(push('/meetup'))
}

export function * subscribe ({ meetups }) {
  try {
    yield call(api.post, 'subscribes', meetups)
    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Meetup',
        message: 'Inscricao realizada com sucesso !',
        options: { closeOnToastrClick: true }
      })
    )
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao criar meetup',
        message: 'Erro desconhecido'
      })
    )
  }
}
