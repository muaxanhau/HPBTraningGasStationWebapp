import React from 'react'
import { Button } from './elements'

const NormalButton = ({ title, onClick, styles }) => {
  return (
    <Button style={styles} onClick={onClick}>
      {title}
    </Button>
  )
}

export default NormalButton
