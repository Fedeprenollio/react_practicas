
export const cartInicialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        // Forma 1 usando STRUCTURECLONE
        // const newState = structuredClone(state)
        // newState[productInCartIndex].quantity += 1

        // usando el .MAP
        const newState = state.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
        updateLocalStorage(newState)
        return newState
      }

      const newState = [...state, {
        ...action.payload,
        quantity: 1
      }]
      updateLocalStorage(newState)
      return newState
    }
    case 'DEDUC_FROM_CART' :{
      const { id } = actionPayload
      //   const productInCartIndex = state.findIndex(item => item.id === id)

      const newState = state.map(item => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return item
      })
      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART':{
      const { id } = actionPayload

      const newState = state.filter(items => items.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case 'CLEAR_THE_CART' :{
      updateLocalStorage(cartInicialState)
      return cartInicialState
    }
  }

  return state
}
