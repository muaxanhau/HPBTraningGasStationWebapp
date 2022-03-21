import React, { useRef } from 'react'
import { Container, InputWrapper } from './elements'
import {
  MainLayout,
  Title,
  Text,
  InputText,
  NormalButton
} from './../../components'
import { isEmail } from './../../utils/validations'

const Login = () => {
  // constansts
  const refInputEmail = useRef()
  const refInputPassword = useRef()

  const handleLogin = () => {
    console.log(isEmail(refInputEmail.current.value))
  }

  // render
  return (
    <Container>
      <MainLayout>
        <Title text='ガソリンスタンド管理' />

        <InputWrapper>
          <Text text='メール:' />
          <InputText ref={refInputEmail} />
        </InputWrapper>

        <InputWrapper>
          <Text text='パスワード:' />
          <InputText ref={refInputPassword} type='password' />
        </InputWrapper>

        <NormalButton
          title='ログイン'
          styles={{ alignSelf: 'center' }}
          onClick={handleLogin}
        />
      </MainLayout>
    </Container>
  )
}

export default Login
