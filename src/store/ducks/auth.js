import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signOut: null,
  signUpRequest: ['name', 'email', 'password'],
  getPermissionsSuccess: ['roles', 'permissions'],
  getUserSuccess: ['user']
})

export const AuthTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Meetup:token'),
  token: localStorage.getItem('@Meetup:token') || null,
  user: null
})

/* Reducers */

export const success = (state, { token, user }) =>
  state.merge({ signedIn: true, token, user })

export const logout = state => state.merge({ signedIn: false, token: null })

export const user = (state, { user }) => state.merge({ user })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.GET_USER_SUCCESS]: user
})
