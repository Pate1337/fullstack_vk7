import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { newAnecdoteNotify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.context.store.dispatch(anecdoteCreation(content))
    this.context.store.dispatch(newAnecdoteNotify(content))

    e.target.anecdote.value = ''
    setTimeout(() => {
      this.context.store.dispatch(newAnecdoteNotify(null))
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

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
