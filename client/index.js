import React from 'react'
import ReactDOM from 'react-dom'
import '../public/index.css';
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
