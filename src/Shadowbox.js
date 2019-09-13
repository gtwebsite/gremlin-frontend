// Enable emotion css prop in file
/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

export default function Shadowbox(props) {
  return (
    <div
      css={{
        padding: 32,
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        borderRadius: 4
      }}
      {...props}
    />
  )
}
