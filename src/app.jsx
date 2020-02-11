import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import Root from './components/root'

function App() {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/video/chiken.mp4" type="video/mp4" />
      </video>
      <Root />
    </>
  )
}

export default App
