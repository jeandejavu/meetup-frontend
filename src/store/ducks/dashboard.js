import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadDashboardRequest: null,
  loadDashboardSuccess: [
    'unregisteredsMeetups',
    'subscribesMeetups',
    'unregisteredsPreferenceMeetups'
  ],
  filterDashboard: ['title']
})

export const DashboardTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  unregisteredsMeetups: [],
  subscribesMeetups: [],
  unregisteredsPreferenceMeetups: [],

  unFilterUnregisteredsMeetups: [],
  unFilterSubscribesMeetups: [],
  unFilterUnregisteredsPreferenceMeetups: [],

  isLoading: true
})

/* Reducers */
export const loadSuccess = (
  state,
  { unregisteredsMeetups, subscribesMeetups, unregisteredsPreferenceMeetups }
) =>
  state.merge({
    isLoading: false,
    unregisteredsMeetups,
    subscribesMeetups,
    unregisteredsPreferenceMeetups,
    unFilterUnregisteredsMeetups: unregisteredsMeetups,
    unFilterSubscribesMeetups: subscribesMeetups,
    unFilterUnregisteredsPreferenceMeetups: unregisteredsPreferenceMeetups
  })

export const filter = (state, { title }) =>
  state.merge({
    unregisteredsMeetups: state.unFilterUnregisteredsMeetups.filter(meetup =>
      meetup.title.includes(title)
    ),
    subscribesMeetups: state.unFilterSubscribesMeetups.filter(meetup =>
      meetup.title.includes(title)
    ),
    unregisteredsPreferenceMeetups: state.unFilterUnregisteredsPreferenceMeetups.filter(
      meetup => meetup.title.includes(title)
    )
  })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_DASHBOARD_SUCCESS]: loadSuccess,
  [Types.FILTER_DASHBOARD]: filter
})
