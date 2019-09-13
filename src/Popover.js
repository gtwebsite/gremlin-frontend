// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

export default function Popover({ attacks }) {
  return (
    <div
      css={{
        border: '1px solid black',
        width: 522,
        height: 336
      }}
    >
      Attacks
      {attacks.map(attack => {
        return <pre>{JSON.stringify(attack, null, 4)}</pre>
      })}
    </div>
  )
}
