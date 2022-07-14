/**
 * Creates context for light/dark mode
 */

import React from 'react'

export const initialState = 'light'

export const ThemeContext = React.createContext({
  mode: initialState,
  toggle: () => {},
})

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return state === 'light' ? 'dark' : 'light'
    default:
      return state
  }
}

export default function Provider ({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = {
    mode: state,
    // @ts-ignore
    toggle: () => dispatch({ type: 'toggle' }),
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}