//Action Creators Which are functions which return Action Objects ({type: '', payload: data})

export const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}