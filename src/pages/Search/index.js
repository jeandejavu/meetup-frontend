import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'

import { Container, SearchBox } from './styles'
import Dashboard from '~/components/Dashboard'
import DashboardActions from '~/store/ducks/dashboard'
class Search extends Component {
  static propTypes = {
    filterDashboard: PropTypes.func.isRequired
  }

  handleInputChange = e => {
    const { filterDashboard } = this.props
    filterDashboard(e.target.value)
  }

  render () {
    return (
      <Container>
        <SearchBox>
          <input
            type='text'
            placeholder='Buscar meetups'
            onChange={this.handleInputChange}
          />
          <MaterialIcon icon='search' color='#8e8e93' />
        </SearchBox>
        <Dashboard />
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DashboardActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
