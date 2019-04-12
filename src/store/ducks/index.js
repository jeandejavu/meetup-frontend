import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as toastr } from 'react-redux-toastr'
import { reducer as auth } from './auth'
import { reducer as userPreference } from './userPreference'
import { reducer as user } from './user'
import { reducer as meetup } from './meetup'
import { reducer as dashboard } from './dashboard'

export default history =>
  combineReducers({
    auth,
    toastr,
    userPreference,
    user,
    meetup,
    dashboard,
    router: connectRouter(history)
  })
