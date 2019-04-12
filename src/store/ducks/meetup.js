import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  saveMeetupRequest: ['meetup'],
  showMeetupRequest: ['id'],
  showMeetupSuccess: ['meetup'],
  subscribeMeetupRequest: ['meetups']
})

export const MeetupTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  meetup: null
})

/* Reducers */
export const showSuccess = (state, { meetup }) => state.merge({ meetup })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_MEETUP_SUCCESS]: showSuccess
})
