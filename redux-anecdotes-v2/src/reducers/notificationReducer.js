const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const newAnecdoteNotify = (name) => {
  let data = 'New anecdote \'' + name + '\' added!'
  if (name === null) {
    data = null
  }
  return {
    type: 'SET_NOTIFICATION',
    data: data
  }
}

export const voteAnecdoteNotify = (name) => {
  let data = 'You voted \'' + name + '\''
  if (name === null) {
    data = null
  }
  return {
    type: 'SET_NOTIFICATION',
    data: data
  }
}

export default notificationReducer
