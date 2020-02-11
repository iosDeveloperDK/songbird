import React from 'react'
import Level from '../level'
import './index.scss'

export default function Header({ level, score }) {
  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <img src="/images/logo.svg" />
        </div>
        <h5>Score: {score}</h5>
      </div>
      <Level level={level} />
    </div>
  )
}
