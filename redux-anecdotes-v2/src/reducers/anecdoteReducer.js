import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {

    return [...store, { content: action.data.content, id: action.data.id, votes: action.data.votes }]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const addVote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const updatedAnecdote = await anecdoteService.update(newAnecdote.id, newAnecdote)
    dispatch({
      type: 'VOTE',
      id: updatedAnecdote.id
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
