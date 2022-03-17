import React from 'react'
import {
  Container,
  FormContainer,
  InputWrapper,
  RatingContainer,
  RatingWrapper,
  CheckBox,
  ButtonContainer
} from './elements'
import {
  MainLayout,
  Title,
  Text,
  InputText,
  Rating,
  NormalButton
} from './../../components'

// constants
const WIDTH_INPUT = '65%'
const MIN_WIDTH_BUTTON = '80px'

// main
const NewGasStation = () => {
  return (
    <Container>
      <MainLayout>
        <Title text='ガソリンスタンド登録' styles={{ minWidth: '420px' }} />

        <FormContainer>
          <InputWrapper>
            <Text text='ガソリンスタンド名:' />
            <InputText styles={{ width: WIDTH_INPUT }} />
          </InputWrapper>

          <InputWrapper>
            <Text text='種類:' />
            <div
              style={{
                width: WIDTH_INPUT,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--gap-1)'
              }}
            >
              <CheckBox type='checkbox' checked={true} onChange={() => {}} />
              <CheckBox type='checkbox' checked={true} onChange={() => {}} />
            </div>
          </InputWrapper>

          <InputWrapper>
            <Text text='Longitude:' />
            <InputText styles={{ width: WIDTH_INPUT }} />
          </InputWrapper>

          <InputWrapper>
            <Text text='Latitude:' />
            <InputText styles={{ width: WIDTH_INPUT }} />
          </InputWrapper>

          <InputWrapper>
            <Text text='住所:' />

            <div
              style={{
                width: WIDTH_INPUT,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--gap-1)'
              }}
            >
              <select style={{ width: '100%' }}>
                <option value='0'>Select car:</option>
                <option value='1'>Audi</option>
                <option value='2'>BMW</option>
                <option value='3'>Citroen</option>
                <option value='4'>Ford</option>
                <option value='5'>Honda</option>
                <option value='6'>Jaguar</option>
                <option value='7'>Land Rover</option>
                <option value='8'>Mercedes</option>
                <option value='9'>Mini</option>
                <option value='10'>Nissan</option>
                <option value='11'>Toyota</option>
                <option value='12'>Volvo</option>
              </select>
              <InputText styles={{ width: '100%' }} />
            </div>
          </InputWrapper>

          <InputWrapper>
            <Text text='開館時間:' />
            <InputText styles={{ width: WIDTH_INPUT }} />
          </InputWrapper>

          <InputWrapper>
            <Text text='評価:' />
            <RatingContainer style={{ width: WIDTH_INPUT }}>
              <RatingWrapper>
                <CheckBox type='radio' checked={false} onChange={() => {}} />
                <Rating type='1' />
              </RatingWrapper>

              <RatingWrapper>
                <CheckBox type='radio' checked={true} onChange={() => {}} />
                <Rating type='2' />
              </RatingWrapper>

              <RatingWrapper>
                <CheckBox type='radio' checked={false} onChange={() => {}} />
                <Rating type='3' />
              </RatingWrapper>
            </RatingContainer>
          </InputWrapper>
        </FormContainer>

        <ButtonContainer>
          <NormalButton title='登録' styles={{ minWidth: MIN_WIDTH_BUTTON }} />
          <NormalButton title='戻る' styles={{ minWidth: MIN_WIDTH_BUTTON }} />
        </ButtonContainer>
      </MainLayout>
    </Container>
  )
}

export default NewGasStation
