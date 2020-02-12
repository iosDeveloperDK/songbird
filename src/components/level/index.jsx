/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import CONSTANTS from '../../utils/constants'
import './index.scss'

export default function Level({ level }) {
  const renderLevels = () => {
    return Array.from({ length: 6 }).map((value, index) => (
      <li key={index} className={level === index ? 'active' : null}>
        {`${CONSTANTS.question} ${index + 1}`}
      </li>
    ))
  }

  return <ul className="menu">{renderLevels()}</ul>
}

Level.propTypes = {
  level: PropTypes.number.isRequired,
}
