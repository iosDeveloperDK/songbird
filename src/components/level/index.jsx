import React, { useState } from 'react'
import './index.scss'

export default function Level({ level }) {
  const renderLevels = () => {
    return Array.apply(null, { length: 6 }).map((value, index) => (
      <li key={index} className={level === index ? 'active' : null}>
        {`Вопрос: ${index + 1}`}
      </li>
    ))
  }

  return <ul className="menu">{renderLevels()}</ul>
}
