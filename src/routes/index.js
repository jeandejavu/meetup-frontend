import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router-dom'

import history from './history'

import Private from './private'
import Guest from './guest'

import Main from '~/pages/Main'
import Profile from '~/pages/Profile'
import NewMeetup from '~/pages/NewMeetup'
import Dashboard from '~/components/Dashboard'
import Search from '~/pages/Search'
import Meetup from '~/pages/Meetup'
import SignUp from '~/pages/Auth/SignUp'
import SignIn from '~/pages/Auth/SignIn'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path='/signin' component={SignIn} />
      <Guest path='/signup' component={SignUp} />

      <Private
        path='/profile'
        component={() => (
          <Main>
            <Profile />
          </Main>
        )}
      />
      <Private
        path='/new-meetup'
        component={() => (
          <Main>
            <NewMeetup />
          </Main>
        )}
      />
      <Private
        path='/search'
        component={() => (
          <Main>
            <Search />
          </Main>
        )}
      />
      <Private
        path='/'
        exact
        component={({ history }) => (
          <Main>
            <Dashboard />
          </Main>
        )}
      />
      <Private
        path='/meetup/:id'
        component={({ match }) => (
          <Main>
            <Meetup match={match} />
          </Main>
        )}
      />
    </Switch>
  </ConnectedRouter>
)

export default Routes
