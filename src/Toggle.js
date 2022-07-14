/**
 * Creates Toggle component that displays checkbox for toggling error simulation and between light/dark mode
 * 
 * @param {Object} props - ToggleError options
 * @param {function} props.onToggle - Function to call when toggle is changed
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import { ThemeContext } from './Provider'

export default function Toggle({ onToggle }) {
  const { mode, toggle } = React.useContext(ThemeContext)

  React.useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#fff' : '#222'
  }, [mode])

  return (
    <div css={{
      top: 0,
      right: 0,
      zIndex: 999,
      position: 'fixed',
      padding: 20,
      color: mode === 'light' ? '#000' : '#fff',
      backgroundColor: mode === 'light' ? '#fff' : '#222',
      textAlign: 'left',
    }}>
      <div>
        <input id='toggleError' type='checkbox' onClick={onToggle} />
        <label htmlFor='toggleError' css={{ marginLeft: 5 }}>Show error</label>
      </div>
      <div>
        <input id='toggleMode' type='checkbox' onClick={toggle} />
        <label htmlFor='toggleMode' css={{ marginLeft: 5 }}>Toggle {mode}</label>
      </div>
    </div>
  )
}
