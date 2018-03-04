import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handleVote = (id, name) => {
    this.props.addVote(id)
    this.props.voteAnecdoteNotify(name)
    setTimeout(() => {
      this.props.voteAnecdoteNotify(null)
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  if (filter === null) {
    return anecdotes
  }
  return anecdotes.filter(a =>
    a.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  addVote,
  voteAnecdoteNotify
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
