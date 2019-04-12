import React, { Fragment, Component } from 'react'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import './config/reactotron'
import store from './store'
import Routes from './routes'

import GlobalStyle from './styles/global'

export default class App extends Component {
  componentDidMount () {
    document.title = 'Meetapp'
  }

  render () {
    return (
      <Provider store={store}>
        <Fragment>
          <Routes />
          <ReduxToastr />
          <GlobalStyle />
        </Fragment>
      </Provider>
    )
  }
}
