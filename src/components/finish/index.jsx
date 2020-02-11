import React, { Component } from 'react'
import './index.scss'
import { playVictory, stopPlay } from '../../utils'

export class Finish extends Component {
  componentDidMount() {
    const { score } = this.props

    if (score === 30) {
      playVictory()
    }
  }

  componentWillUnmount() {
    stopPlay()
  }

  render() {
    const { handleRestart, score } = this.props
    return (
      <div className="finish">
        <h1>Поздравляем!</h1>
        <p>{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
        <hr className="line" />
        <button className="btn-restart" onClick={() => handleRestart()}>
          Попробывать еще раз!
        </button>
      </div>
    )
  }
}

export default Finish
