import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  storePreferenceRequest: ['preferences']
})

export const UserPreferenceTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({})

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {})
