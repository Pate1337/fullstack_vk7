import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Filter extends React.Component {
  handleChange = (event) => {
    event.preventDefault()
    this.props.updateFilter(event.target.value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

Filter.contextTypes = {
  store: PropTypes.object
}

const mapDispatchToProps = {
  updateFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter
