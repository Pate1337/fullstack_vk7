import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'

class AnecdoteList extends React.Component {
  handleVote = (id, name) => {
    this.context.store.dispatch(addVote(id))
    this.context.store.dispatch(voteAnecdoteNotify(name))
    setTimeout(() => {
      this.context.store.dispatch(voteAnecdoteNotify(null))
    }, 5000)
  }
  render() {
    const anecdotesToShow = () => {
      const anecdotes = this.context.store.getState().anecdotes
      const filter = this.context.store.getState().filter
      if (filter === null) {
        return anecdotes
      }
      return anecdotes.filter(a =>
        a.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    }
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.handleVote(anecdote.id, anecdote.content)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
