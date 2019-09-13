// Enable emotion css prop in file
/* @jsx jsx */

// import a css file if you prefer
import './styles.css' // sass/scss is also supported

import { jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'

import Popover from './Popover'


const attacks = [
  {

  }
]

export default class App extends React.Component {
  render() {
    return (
      <div className="App" css={{ color: 'darkgray' }}>
        <div css={{
          padding: 32,
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
          borderRadius: 4
        }}>
          <Popover attacks={[]} />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
