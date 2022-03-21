import React from 'react'
import { Container, Wrapper } from './elements'
import { Title } from './../../components'

const GlobalLoading = () => {
  return (
    <Container>
      <Wrapper>
        <Title text='Loading...' />
      </Wrapper>
    </Container>
  )
}

export default GlobalLoading
