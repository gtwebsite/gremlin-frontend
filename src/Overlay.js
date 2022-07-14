/**
 * Creates overlay component
 * 
 * @param {Object} props - Overlay options
 * @param {string} props.children - Overlay content
 * @param {string} props.css - Overlay css
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import { ThemeContext } from './Provider'

export default function Overlay({ children, css = {} }) {
  const { mode } = React.useContext(ThemeContext)

  return (
    <div
      css={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9,
        position: 'absolute',
        backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...css
      }}
    >
      {children}
    </div>
  )
}
