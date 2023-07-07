import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { QuoteContainer, Text } from './QuoteStyles'

const url = 'https://type.fit/api/quotes'


const Quote = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    if (!data) return null

    // console.log(data)

    let randomNum = Math.floor(Math.random() * 100);

  return (
    <QuoteContainer>
        <Text>{data[randomNum].text + "  " + randomNum}</Text>
        <Text>{data[randomNum].author + "  " + randomNum}</Text>
    </QuoteContainer>
  )
}

export default Quote