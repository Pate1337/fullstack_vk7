import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handleVote = async (anecdote) => {
    this.props.addVote(anecdote)
    this.props.voteAnecdoteNotify(anecdote.content)
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
                this.handleVote(anecdote)
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
