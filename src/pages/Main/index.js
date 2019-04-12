import React from 'react'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import Preferences from '../Preferences'
import AuthActions from '~/store/ducks/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Main = ({ existsPreference, children, signOut }) => {
  function handleExit () {
    localStorage.removeItem('@Meetup:token')
    signOut()
  }

  if (!existsPreference) {
    return (
      <Container>
        <Preferences />
      </Container>
    )
  }
  return (
    <>
      <Container>
        <nav>
          <ul>
            <li>
              <img src='/images/logo-white.svg' id='icon' alt='Logo Icon' />
            </li>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/search'>Buscar</Link>
            </li>
            <li>
              <Link to='/new-meetup'>Novo Meetup</Link>
            </li>
            <li>
              <Link to='/profile'>
                <MaterialIcon icon='person_outline' color='#ffffff' />
              </Link>

              <MaterialIcon
                icon='exit_to_app'
                color='#ffffff'
                onClick={handleExit}
              />
            </li>
          </ul>
        </nav>
      </Container>
      {children}
    </>
  )
}

const mapStateToProps = state => ({
  existsPreference: state.auth.user && state.auth.user.Preferences.length > 0
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
