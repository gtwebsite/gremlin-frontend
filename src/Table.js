/**
 * Creates table component that displays attacks data with headers, columns and rows
 * 
 * @param {Object} props - Table options
 * @param {Array} props.attacks - Attacks data
 * @param {string} props.css - Table css
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import { ThemeContext } from './Provider'
import TableRow from './TableRow'

export default function Table({ attacks, css = {} }) {
  const { mode } = React.useContext(ThemeContext)

  return (
    <div css={{ 
      overflow: 'auto', 
      height: '100%', 
      width: '100%',
      ...css
    }}>
      <table css={{ 
        margin: 0, 
        padding: 0,
        minWidth: 600,
        'td, th': {
          padding: 10,
          textAlign: 'left',
        }
      }}>
        <thead css={{
          th: {
            top: 0,
            left: 0,
            paddingY: 15,
            position: 'sticky',
            backgroundColor: mode === 'light' ? '#fff' : '#222',
          }
        }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Targets</th>
            <th>State</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody css={{
          'tr:nth-child(odd)': {
            td: {
              backgroundColor: mode === 'light' ? '#eee' : '#444',
            }
          },
          td: {
            verticalAlign: 'top',
          }
        }}>
          {attacks.map(attack => {
            return <TableRow key={attack?.id} attack={attack} />
          })}
        </tbody>
      </table>
    </div>
  )
}