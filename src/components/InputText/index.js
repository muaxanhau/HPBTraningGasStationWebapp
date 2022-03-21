import React from 'react'
import { Input } from './elements'

const InputText = React.forwardRef(({ type, styles }, ref) => {
  return <Input ref={ref} style={styles} type={type} />
})

export default InputText
