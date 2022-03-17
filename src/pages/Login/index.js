import React from 'react'
import { Container, InputWrapper } from './elements'
import {
  MainLayout,
  Title,
  Text,
  InputText,
  NormalButton
} from './../../components'

const Login = () => {
  return (
    <Container>
      <MainLayout>
        <Title text='ガソリンスタンド管理' />

        <InputWrapper>
          <Text text='メール:' />
          <InputText />
        </InputWrapper>

        <InputWrapper>
          <Text text='パスワード:' />
          <InputText />
        </InputWrapper>

        <NormalButton title='ログイン' styles={{ alignSelf: 'center' }} />
      </MainLayout>
    </Container>
  )
}

export default Login
