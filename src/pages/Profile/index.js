import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader-spinner'

import UserActions from '~/store/ducks/user'

import { Container, SignForm } from './styles'
import Api from '~/services/api'
import { actions as toastrActions } from 'react-redux-toastr'

class Profile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      password: PropTypes.string,
      Preferences: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string
        })
      )
    }),
    add: PropTypes.func.isRequired,
    saveUserRequest: PropTypes.func.isRequired
  }

  state = {
    isLoading: true,
    name: '',
    email: '',
    password: '',
    rePassword: '',
    preferences: [],
    selectedPreferences: []
  }

  async componentDidMount () {
    const { data: preferences } = await Api.get('/preferences')
    this.setState({ preferences, isLoading: false })

    const { user } = this.props
    const { name, Preferences } = user
    const selectedPreferences = Preferences.map(pref => pref.id)
    this.setState({ name, selectedPreferences })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {
      preferences,
      name,
      password,
      rePassword,
      selectedPreferences
    } = this.state

    const { user, add, saveUserRequest } = this.props
    if (password !== rePassword) {
      return add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Senhas não conferem',
        options: { closeOnToastrClick: true }
      })
    }

    const Preferences = preferences.filter(preference =>
      selectedPreferences.includes(preference.id)
    )

    if (Preferences.length === 0) {
      return add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Selecione pelo menos uma preferencia',
        options: { closeOnToastrClick: true }
      })
    }

    const updateUser = { ...user, name, Preferences }
    if (password.length > 0) {
      updateUser.password = password
    }
    saveUserRequest(updateUser)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleInputClick = e => {
    const { target: checkbox } = e
    const { selectedPreferences } = this.state
    // this.setState({ [e.target.name]: e.target.value })
    if (checkbox.checked) {
      this.setState({
        selectedPreferences: [...selectedPreferences, checkbox.value * 1]
      })
    } else {
      this.setState({
        selectedPreferences: selectedPreferences.filter(
          preference => preference !== checkbox.value * 1
        )
      })
    }
  }

  render () {
    const {
      preferences,
      name,
      password,
      rePassword,
      selectedPreferences: Preferences,
      isLoading
    } = this.state
    if (isLoading) {
      return (
        <Container>
          <Loader
            type='CradleLoader'
            color='#00BFFF'
            height='100'
            width='100'
          />
        </Container>
      )
    }

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <span>Nome</span>
          <input
            name='name'
            placeholder='Digite seu nome'
            value={name}
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

          <span>Confirmação de Senha</span>
          <input
            type='password'
            name='rePassword'
            placeholder='Sua senha secreta'
            value={rePassword}
            onChange={this.handleInputChange}
          />
          <span>Preferências</span>
          {preferences.map(preference => (
            <label key={`${preference.id}}`}>
              <input
                type='checkbox'
                name='preferences[]'
                onChange={this.handleInputClick}
                value={`${preference.id}`}
                checked={!!Preferences.find(pref => pref === preference.id)}
              />
              {preference.description}
            </label>
          ))}
          <button type='submit'>Salvar</button>
        </SignForm>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions, ...toastrActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
