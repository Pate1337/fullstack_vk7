const filterReducer = (state = null, action) => {
  switch(action.type) {
    case 'UPDATE':
      return action.data
    default:
      return state
  }
}

export const updateFilter = (value) => {
  return {
    type: 'UPDATE',
    data: value
  }
}

export default filterReducer
