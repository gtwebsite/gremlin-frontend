/**
 * Creates row component that displays single attack data in columns of row
 * 
 * @param {Object} props - Table options
 * @param {Array} props.attack - Attack data
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

export default function TableRow({ attack }) {
  // Spread attack data
  const { id, attack_name, attack_type, targets, state, scheduled_date } = attack

  return (
    <tr>
      <td>{id}</td>
      <td>{attack_name}</td>
      <td>{attack_type}</td>
      <td>{targets}</td>
      <td>{state}</td>
      <td>{scheduled_date}</td>
    </tr>
  )
}