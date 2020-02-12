import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
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
    data.forEach(value => {
      if (value.name === 'Курица' || value.name === 'Петух') {
        setAnser(value)
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

  const handleAnswerClick = bird => {
    if (!answers.includes(bird.id) && !isFind) {
      setAnswers([...answers, bird.id])
    }
    setSelectAnswer(bird)
  }

  return (
    <Container fluid className="no-padding">
      <Question answer={answer} isFind={isFind} />
      <Row>
        <Col sm={5}>
          <AnswerList
            answer={answer}
            answers={answers}
            birds={data}
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

Quiz.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    })
  ),
  handleNextLevel: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
}

Quiz.defaultProps = {
  data: [],
}
