import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import PropTypes from 'prop-types'

class Filter extends React.Component {
  handleChange = (event) => {
    event.preventDefault()
    this.context.store.dispatch(updateFilter(event.target.value))
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

export default Filter
