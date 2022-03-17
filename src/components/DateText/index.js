import React from 'react'
import Text from './../Text'

const DateText = ({ year, month, day }) => {
  return (
    <Text text={`${year ?? 'N/A'}年 ${month ?? 'N/A'}月 ${day ?? 'N/A'}日`} />
  )
}

export default DateText
