import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'
import Loader from 'react-loader-spinner'

import DashboardActions from '~/store/ducks/dashboard'

import {
  Container,
  Sessao,
  MeetupList,
  MeetupItem,
  ContainerLoading
} from './styles'

class Dashboard extends Component {
  static propTypes = {
    unregisteredsMeetups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        MeetupsSubscriptions: PropTypes.array
      })
    ),
    subscribesMeetups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        MeetupsSubscriptions: PropTypes.array
      })
    ),
    unregisteredsPreferenceMeetups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        MeetupsSubscriptions: PropTypes.array
      })
    ),
    isLoading: PropTypes.bool.isRequired,
    loadDashboardRequest: PropTypes.func.isRequired
  }

  async componentDidMount () {
    const { loadDashboardRequest } = this.props
    loadDashboardRequest()
  }

  render () {
    const {
      unregisteredsMeetups,
      subscribesMeetups,
      unregisteredsPreferenceMeetups,
      isLoading
    } = this.props

    if (isLoading) {
      return (
        <ContainerLoading>
          <Loader
            type='CradleLoader'
            color='#00BFFF'
            height='100'
            width='100'
          />
        </ContainerLoading>
      )
    }

    return (
      <Container>
        <Sessao>
          <h1>Inscrições</h1>
          <MeetupList>
            {subscribesMeetups.map(meetup => (
              <MeetupItem key={meetup.id}>
                <img
                  src={`${meetup.pathCoverPhoto}`}
                  id='icon'
                  alt='Imagem Evento'
                />
                <div>{meetup.title}</div>
                <p>{meetup.MeetupsSubscriptions.length} membros</p>
                <Link to={`/meetup/${meetup.id}`}>
                  <MaterialIcon icon='keyboard_arrow_right' color='#ffffff' />
                </Link>
              </MeetupItem>
            ))}
          </MeetupList>
        </Sessao>
        <Sessao>
          <h1>Próximos meetups</h1>
          <MeetupList>
            {unregisteredsMeetups.map(meetup => (
              <MeetupItem key={meetup.id}>
                <img
                  src={`${meetup.pathCoverPhoto}`}
                  id='icon'
                  alt='User Icon'
                />
                <div>{meetup.title}</div>
                <p>{meetup.MeetupsSubscriptions.length} membros</p>
                <Link to={`/meetup/${meetup.id}`}>
                  <MaterialIcon icon='keyboard_arrow_right' color='#ffffff' />
                </Link>
              </MeetupItem>
            ))}
          </MeetupList>
        </Sessao>
        <Sessao>
          <h1>Recomendados</h1>
          <MeetupList>
            {unregisteredsPreferenceMeetups.map(meetup => (
              <MeetupItem key={meetup.id}>
                <img
                  src={`${meetup.pathCoverPhoto}`}
                  id='icon'
                  alt='User Icon'
                />
                <div>{meetup.title}</div>
                <p>{meetup.MeetupsSubscriptions.length} membros</p>
                <Link to={`/meetup/${meetup.id}`}>
                  <MaterialIcon icon='keyboard_arrow_right' color='#ffffff' />
                </Link>
              </MeetupItem>
            ))}
          </MeetupList>
        </Sessao>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  unregisteredsMeetups: state.dashboard.unregisteredsMeetups,
  subscribesMeetups: state.dashboard.subscribesMeetups,
  unregisteredsPreferenceMeetups:
    state.dashboard.unregisteredsPreferenceMeetups,
  isLoading: state.dashboard.isLoading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DashboardActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
