import React from 'react'
import { Wrapper } from './elements'

const Text = ({ text, styles }) => {
  return <Wrapper style={styles}>{text}</Wrapper>
}

export default Text
