import React from 'react'
import './index.scss'

export default function Next({ isFind, handleNextLevel }) {
  return (
    <button
      disabled={!isFind}
      className={`next-btn ${isFind && 'enabled'}`}
      onClick={() => handleNextLevel()}
    >
      Следующий вопрос
    </button>
  )
}
