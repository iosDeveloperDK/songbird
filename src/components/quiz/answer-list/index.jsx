import React from 'react'
import './index.scss'
import { playError, playCorrect } from '../../../utils'

export default function AnswerList({
  data,
  answer,
  answers,
  handleAnswerClick
}) {
  const checkAnswer = id => {
    if (answer.id !== id && answers.includes(id)) {
      return 'wrong'
    } else if (answer.id === id && answers.includes(id)) {
      return 'correct'
    }
  }

  const renderAnswerList = () => {
    return data.map(data => (
      <li
        key={data.id}
        onClick={() => {
          handleAnswerClick(data)
          if (answer.id !== data.id) {
            playError()
          } else {
            playCorrect()
          }
        }}
      >
        <span className={`answer-status + ${checkAnswer(data.id)}`}></span>
        {data.name}
      </li>
    ))
  }

  return <ul className="answer-list">{renderAnswerList()}</ul>
}
