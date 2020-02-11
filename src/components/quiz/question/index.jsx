import React, { useEffect } from 'react'
import './index.scss'
import AudioPlayer from '../../player'

export default function Question({ answer, isFind }) {
  let childRef = React.useRef()

  const renderAnswer = () => {
    return (
      <div className="question">
        <img src={isFind ? answer.image : '/images/placeholder.jpg'} />
        <div className="question-bar">
          <h3>{isFind ? answer.name : '******'}</h3>
          <AudioPlayer src={answer.audio} />
        </div>
      </div>
    )
  }

  return renderAnswer()
}
