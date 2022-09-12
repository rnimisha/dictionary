import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import data from './dataType'

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
      !isLoading && wordData?.map((item)=>{
            return (item?.word)
      })
     }
    </div>
  )
}

export default Meaning