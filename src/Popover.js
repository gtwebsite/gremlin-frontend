/**
 * Creates popover component that displays attacks data in table
 * 
 * @param {Object} props - Popover options
 * @param {Array} props.attacks - Attacks data
 * @param {string} props.error - Error message
 * @param {boolean} props.isLoading - Is loading
 * @param {string} props.css - Popover css
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import Overlay from './Overlay'
import Table from './Table'
import { ThemeContext } from './Provider'

export default function Popover({ attacks, isLoading = false, error = null, css = {} }) {
  const { mode } = React.useContext(ThemeContext)

  return (
    <div css={{
      padding: 32,
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      borderRadius: 4,
      color: mode === 'light' ? '#000' : '#fff',
      backgroundColor: mode === 'light' ? '#fff' : '#333',
      ...css
    }}>
      <div
        css={{
          border: `1px solid ${mode === 'light' ? '#000' : '#fff'}`,
          maxWidth: 700,
          width: '100%',
          height: 500,
          padding: 20,
          position: 'relative',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Attacks</h1>

        {error && (
          <Overlay>
            <p style={{ color: '#ff0000' }}>{error}</p>
          </Overlay>
        )}

        {isLoading && (
          <Overlay>
            <p>Loading...</p>
          </Overlay>
        )}

        <div css={{
          height: 410
        }}>
          <Table attacks={attacks} />
        </div>
      </div>
    </div>
  )
}
