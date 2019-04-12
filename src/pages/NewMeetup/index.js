import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader-spinner'
import Dropzone from 'react-dropzone'
import MaterialIcon from 'material-icons-react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt-BR'

import MeetupActions from '~/store/ducks/meetup'

import { Container, Form, File } from './styles'
import Api from '~/services/api'
import { actions as toastrActions } from 'react-redux-toastr'

class Meetup extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    saveMeetupRequest: PropTypes.func.isRequired
  }

  state = {
    isLoading: true,
    title: '',
    description: '',
    location: '',
    eventDate: null,
    preferences: [],
    files: [],
    selectedPreferences: []
  }

  async componentDidMount () {
    const { data: preferences } = await Api.get('/preferences')
    this.setState({ preferences, isLoading: false })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {
      preferences,
      title,
      description,
      location,
      eventDate,
      files,
      selectedPreferences
    } = this.state
    const { saveMeetupRequest, add } = this.props

    if (
      !title ||
      !description ||
      !location ||
      !eventDate ||
      selectedPreferences.length === 0
    ) {
      return add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Preencha todos os campos',
        options: { closeOnToastrClick: true }
      })
    }

    const Preferences = preferences.filter(preference =>
      selectedPreferences.includes(preference.id)
    )

    const newMeetup = {
      preferences,
      title,
      description,
      location,
      eventDate,
      files,
      Preferences
    }
    saveMeetupRequest(newMeetup)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDrop = files => this.setState({ files })

  renderFiles () {
    const { files } = this.state

    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    return !files.length ? (
      <div>
        <MaterialIcon icon='camera_alt' color='#ffffff' />
      </div>
    ) : (
      files.map(file => (
        <div key={file.name}>
          <img alt={file.name} src={file.preview} />
        </div>
      ))
    )
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
  handleDateChange = date => {
    this.setState({
      eventDate: date
    })
  }
  onDrop = acceptedFiles => {
    console.log(acceptedFiles)
  }
  render () {
    const {
      preferences,
      title,
      description,
      location,
      eventDate,
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
        <Form onSubmit={this.handleSubmit}>
          <span>Titulo</span>
          <input
            name='title'
            placeholder='Digite o título do meetup'
            value={title}
            onChange={this.handleInputChange}
          />

          <span>Descrição</span>
          <input
            name='description'
            placeholder='Descreva seu meetup'
            value={description}
            onChange={this.handleInputChange}
          />

          <span>Data/hora</span>
          <DatePicker
            name='eventDate'
            minDate={new Date()}
            selected={eventDate}
            onChange={this.handleDateChange}
            showTimeSelect
            dateFormat='MMMM d, yyyy h:mm aa'
            locale={pt}
          />
          <span>Imagem</span>
          <Dropzone
            onDrop={this.handleDrop}
            className='dropzone'
            multiple={false}
            activeClassName='active-dropzone'
          >
            {({ getRootProps, getInputProps }) => (
              <File {...getRootProps()}>
                <input {...getInputProps()} />
                {this.renderFiles()}
              </File>
            )}
          </Dropzone>

          <span>Localização</span>
          <input
            name='location'
            placeholder='Onde seu meetup irá acontecer ?'
            value={location}
            onChange={this.handleInputChange}
          />

          <span>Tema do meetup</span>
          {preferences.map(preference => (
            <label key={`${preference.id}}`}>
              <input
                type='checkbox'
                name='preferences[]'
                onChange={this.handleInputClick}
                value={`${preference.id}`}
              />
              {preference.description}
            </label>
          ))}
          <button type='submit'>Salvar</button>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MeetupActions, ...toastrActions }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Meetup)
