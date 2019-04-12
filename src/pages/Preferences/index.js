import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container, PreferencesForm } from './styles'
import UserPreferenceActions from '~/store/ducks/userPreference'
import { actions as toastrActions } from 'react-redux-toastr'

import Api from '~/services/api'

class Preferences extends Component {
  static propTypes = {
    storePreferenceRequest: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  }

  state = {
    preferences: []
  }

  async componentDidMount () {
    const { data: preferences } = await Api.get('/preferences')
    this.setState({ preferences })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { preferences } = this.state
    const { storePreferenceRequest, add } = this.props
    const selectedPreferences = [].map.call(
      document.querySelectorAll('input:checked'),
      checkbox => checkbox.value * 1
    )
    const savePreferences = preferences.filter(preference =>
      selectedPreferences.includes(preference.id)
    )
    if (savePreferences.length === 0) {
      return add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Selecione pelo menos uma preferencia',
        options: { closeOnToastrClick: true }
      })
    }

    storePreferenceRequest(savePreferences)
  }

  render () {
    const { preferences } = this.state
    const { user } = this.props
    if (!user) return <div />
    return (
      <Container>
        <PreferencesForm onSubmit={this.handleSubmit}>
          <h1>Olá, {`${user.name}`}</h1>
          <h2>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
            preferências para selecionarmos os melhores meetups pra você:
          </h2>
          <span>Preferências</span>
          {preferences.map(preference => (
            <label key={`${preference.id}}`}>
              <input
                type='checkbox'
                name='preferences[]'
                value={`${preference.id}`}
              />
              {preference.description}
            </label>
          ))}
          <button type='submit'>Continuar</button>
        </PreferencesForm>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserPreferenceActions, ...toastrActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences)
