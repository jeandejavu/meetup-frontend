import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '~/routes/history'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthActions from '~/store/ducks/auth'

// import Button from '~/styles/components/Button'
import { Container, SignForm } from '../styles'

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    const { signInRequest } = this.props

    signInRequest(email, password)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleNavigate = (e, link) => {
    e.preventDefault()
    history.push(link)
  }

  render () {
    const { email, password } = this.state

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <img src='/images/logo.svg' id='icon' alt='User Icon' />

          <span>Email</span>
          <input
            type='email'
            name='email'
            placeholder='Digite seu e-mail'
            value={email}
            onChange={this.handleInputChange}
          />

          <span>Senha</span>
          <input
            type='password'
            name='password'
            placeholder='Sua senha secreta'
            value={password}
            onChange={this.handleInputChange}
          />

          <button type='submit'>Entrar</button>
          <a href='/' onClick={e => this.handleNavigate(e, '/signup')}>
            Criar conta gratis
          </a>
        </SignForm>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(SignIn)
