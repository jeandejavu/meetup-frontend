import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Container, Content, ContainerLoading } from './styles'
import MeetupActions from '~/store/ducks/meetup'
import Api from '~/services/api'
moment.locale('pt-br')

class Meetup extends Component {
  static propTypes = {
    subscribeMeetupRequest: PropTypes.func.isRequired
  }

  state = {
    meetup: null,
    isLoading: true
  }

  async componentDidMount () {
    const {
      match: { params }
    } = this.props
    const { data: meetup } = await Api.get(`meetups/${params.id}`)

    const eventDate = moment(meetup.eventDate).format(
      'D [de] MMMM [de] YYYY [às] HH:mm'
    )

    this.setState({
      meetup: { ...meetup, eventDate },
      isLoading: false
    })
  }

  handleClick = () => {
    const { meetup } = this.state

    const { subscribeMeetupRequest } = this.props
    subscribeMeetupRequest({ meetups: [meetup] })
  }

  render () {
    const { meetup, isLoading } = this.state
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
    const { userId } = this.props
    return (
      <Container>
        <Content>
          <img src={`${meetup.pathCoverPhoto}`} id='icon' alt='Imagem Evento' />
          <div>
            <h1>{meetup.title}</h1>
            <h2>{meetup.MeetupsSubscriptions.length} membros</h2>
            <p>{meetup.description}</p>
            <span>Realizado em:</span>
            <label>{meetup.location}</label>
            <span>Quando:</span>
            <label>{meetup.eventDate}</label>
            {meetup.MeetupsSubscriptions.find(
              subscription => subscription.userId === userId
            ) ? null : (
              <button type='button' onClick={this.handleClick}>
                Inscreva-se
                </button>
              )}
          </div>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetup)
