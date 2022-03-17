import React from 'react'
import {
  Container,
  FormContainer,
  TextWrapper,
  CommentContainer,
  CommentWrapper
} from './elements'
import {
  MainLayout,
  Title,
  Text,
  NormalButton,
  Rating,
  DateText
} from './../../components'
import { Images } from './../../constants'

// constants
const WIDTH_INPUT = '65%'
const MIN_WIDTH_BUTTON = '80px'
const MIN_WIDTH_COMMENT = '400px'

// render
const DetailGasStation = () => {
  return (
    <Container>
      <MainLayout>
        <Title text='投稿の閲覧' />

        <FormContainer>
          <TextWrapper>
            <Text text='ガソリンスタンド名:' />
            <Text styles={{ width: WIDTH_INPUT }} text={'ABC'} />
          </TextWrapper>

          <TextWrapper>
            <Text text='種類:' />
            <Text styles={{ width: WIDTH_INPUT }} text={'A95, A92'} />
          </TextWrapper>

          <TextWrapper>
            <Text text='住所:' />
            <Text
              styles={{ width: WIDTH_INPUT }}
              text={'Số 1, Tô Ký, Quận 12'}
            />
          </TextWrapper>

          <TextWrapper>
            <Text text='開館時間:' />
            <Text styles={{ width: WIDTH_INPUT }} text={'7h - 22h'} />
          </TextWrapper>

          <TextWrapper>
            <Text text='評価:' />
            <div
              style={{
                width: WIDTH_INPUT,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating type='1' />
            </div>
          </TextWrapper>
        </FormContainer>

        <CommentContainer style={{ minWidth: MIN_WIDTH_COMMENT }}>
          <CommentWrapper>
            <DateText year='2022' month='02' day='25' />
            <Text text='asdjsadkjk ashdjkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah kjhsa jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jdhjkas hdjkl kashd klsahdhs' />
          </CommentWrapper>

          <CommentWrapper>
            <DateText year='2022' month='02' day='25' />
            <Text text='kjhsa jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jkhd khsakjhd ksah jdhjkas hdjkl kashd klsahdhs' />
          </CommentWrapper>
        </CommentContainer>
        <NormalButton
          title='戻る'
          styles={{ minWidth: MIN_WIDTH_BUTTON, alignSelf: 'end' }}
        />
      </MainLayout>
    </Container>
  )
}

export default DetailGasStation
