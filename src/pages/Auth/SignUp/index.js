import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '~/routes/history'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthActions from '~/store/ducks/auth'

import { Container, SignForm } from '../styles'

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired
  }

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    const { name, email, password } = this.state
    const { signUpRequest } = this.props

    signUpRequest(name, email, password)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleNavigate = (e, link) => {
    e.preventDefault()

    history.push(link)
  }

  render () {
    const { name, email, password } = this.state

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <img src='/images/logo.svg' id='icon' alt='User Icon' />

          <span>Nome</span>
          <input
            name='name'
            placeholder='Digite seu nome'
            value={name}
            onChange={this.handleInputChange}
          />

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

          <button type='submit'>Criar conta</button>
          <a href='/' onClick={e => this.handleNavigate(e, '/signin')}>
            Já tenho conta
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
)(SignUp)
