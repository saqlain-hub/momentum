import React from 'react'
import { DateContainer } from './DateStyles'

const DateToday = () => {
    let today = new Date();
    let date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();
  return (
    <DateContainer>
      <div>
        <p>{date}</p>
      </div>
    </DateContainer>
  )
}

export default DateToday