import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { newAnecdoteNotify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreation(content)
    this.props.newAnecdoteNotify(content)

    setTimeout(() => {
      this.props.newAnecdoteNotify(null)
    }, 5000)
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
     )
   }
}

const mapDispatchToProps = {
  anecdoteCreation,
  newAnecdoteNotify
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)


export default ConnectedAnecdoteForm
