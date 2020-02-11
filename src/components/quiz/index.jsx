import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Question from './question'
import Answers from './answer'
import AnswerList from './answer-list'
import Next from './next'

export default function Quiz({ data, handleNextLevel, handleScore }) {
  const score = 6
  const [answer, setAnser] = React.useState({})
  const [selectAnswer, setSelectAnswer] = React.useState(null)
  const [isFind, setFind] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

  useEffect(() => {
    const getAnswer = data[Math.floor(Math.random() * data.length)]
    let isInsert = false
    data.forEach(answer => {
      if (answer.name === 'Курица' || answer.name === 'Петух') {
        setAnser(answer)
        isInsert = true
      }
    })
    if (!isInsert) {
      setAnser(getAnswer)
    }
  }, [])

  useEffect(() => {
    if (answer.name) {
      console.log(`Правильный ответ: ${answer.name}`)
    }
  }, [answer])

  useEffect(() => {
    if (answers.includes(answer.id)) {
      setFind(true)
      handleScore(score - answers.length)
    }
  }, [answers])

  const handleAnswerClick = data => {
    if (!answers.includes(data.id) && !isFind) {
      setAnswers([...answers, data.id])
    }
    setSelectAnswer(data)
  }

  return (
    <Container fluid className="no-padding">
      <Question answer={answer} isFind={isFind} />
      <Row>
        <Col sm={5}>
          <AnswerList
            answers={answers}
            data={data}
            answer={answer}
            handleAnswerClick={handleAnswerClick}
          />
        </Col>
        <Col sm={7}>
          <Answers selectAnswer={selectAnswer} />
        </Col>
        <Col sm={12}>
          <Next isFind={isFind} handleNextLevel={handleNextLevel} />
        </Col>
      </Row>
    </Container>
  )
}
