/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

export default function Popover({ attacks }) {
  return (
    <div css={{ border: '1px solid black'}}>
      Attacks
      {attacks.map(attack => {
        return <pre>{JSON.stringify(attack, null, 2)}</pre>
      })}
    </div>
  )
}
