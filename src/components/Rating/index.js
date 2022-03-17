import React from 'react'
import { Image } from './elements'
import { Images } from './../../constants'

const Rating = ({ type = 2, styles }) => {
  return (
    <Image
      src={type == 1 ? Images.no1 : type == 3 ? Images.no3 : Images.no2}
      style={styles}
    />
  )
}

export default Rating
