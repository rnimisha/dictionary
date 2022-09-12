import React from 'react'
import {useParams} from 'react-router-dom'

const Meaning = () => {

  const params = useParams()
  const word = params.word
  return (
    <div>{word}</div>
  )
}

export default Meaning