import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import data from './dataType'

const Meaning = () => {

  const [wordData, setWordData] = useState<data | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/apple').then((response)=>{
      setWordData(response.data)
      setIsLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  const params = useParams()
  const word = params.word
  return (
    <div>
     {
      !isLoading && wordData?.map((item)=>{
            console.log(item?.word)
            return 'test'
      })
     }
    </div>
  )
}

export default Meaning