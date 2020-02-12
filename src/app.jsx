import React from 'react'
import Root from './components/root'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

function App() {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={`${process.env.PUBLIC_URL}/video/chiken.mp4`} type="video/mp4" />
      </video>
      <Root />
    </>
  )
}

export default App
