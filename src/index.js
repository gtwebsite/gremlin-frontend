/* @jsx jsx */
import './styles.css'

import { jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'

import Popover from './Popover'


export default class App extends React.Component {
  render() {
    return (
      <div className="App" css={{ color: 'darkgray' }}>
        <Popover attacks={[]} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
