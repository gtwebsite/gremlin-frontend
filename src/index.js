/**
 * Main app container, which will be rendered on the page
 * 
 * @returns {React.Component}
 * 
 */

// Enable emotion css prop in file
/* @jsx jsx */

// import a css file if you prefer
import './styles.css' // sass/scss is also supported

import { jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// Import data to be use in app
import {default as data} from './/attacks.json'

// Import local components
import Popover from './Popover'
import Toggle from './Toggle'
import Provider from './Provider'

// Simlate data fetching from a data source
// Accepts boolean as a parameter to toggle error state
const fetchData = (isResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(data) : reject('Opps, some kind of error!')
    }, 1000)
  })
}

export default function App () {
  // Set initial state
  const [attacks, setAttacks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)

  // Fetch data on component mount
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await fetchData(!isError)
        setAttacks(data)
      }catch(e) {
        setError(e)
        setAttacks([])
      }
      setIsLoading(false)
    })()
  }, [isError])

  // Toggle error state
  const handleToggleCheckbox = () => {
    setIsError((prev) => !prev)
  }

  return (
    <Provider>
      <div className="App">
        <Toggle onToggle={handleToggleCheckbox} />
        <Popover attacks={attacks} error={error} isLoading={isLoading} />
      </div>
    </Provider>
  )
}

// Render app on the page
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)