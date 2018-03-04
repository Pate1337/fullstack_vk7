import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const n = this.props.notification
    const visible = { display: n === null ? 'none' : ''}
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      marginBottom: 10
    }
    return (
      <div style={visible}>
        <div style={style}>
          {this.props.notification}
        </div>
      </div>
    )
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification
