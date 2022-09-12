import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import data from './dataType'
import WordHeader from '../../Components/WordHeader/WordHeader'

const Meaning = () => {

  const [wordData, setWordData] = useState<data | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams()
  const word = params.word

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response)=>{
      setWordData(response.data)
      setIsLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  return (
    <div>
     {
      !isLoading && 
      <>
        <WordHeader/>
      </>
     }
     {
      isLoading && <p>Loading....</p>
     }
    </div>
  )
}

export default Meaning