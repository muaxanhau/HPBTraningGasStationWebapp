import React from 'react'
import {
  Container,
  TitleContainer,
  FormContainer,
  InputWrapper,
  TableContainer,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  CheckBoxContainer,
  CheckBoxWrapper,
  CheckBox
} from './elements'
import {
  MainLayout,
  Title,
  Text,
  InputText,
  Rating,
  NormalButton
} from './../../components'
import { Images } from './../../constants'

// constants
const WIDTH_INPUT = '65%'
const MIN_WIDTH_BUTTON = '80px'

// main
const ListGasStation = () => {
  // constants

  // render
  return (
    <Container>
      <MainLayout>
        <TitleContainer>
          <Title text='ガソリンスタンド一覧' />

          <NormalButton
            title='検索'
            styles={{
              minWidth: MIN_WIDTH_BUTTON,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 0
            }}
          />
        </TitleContainer>

        <FormContainer>
          <InputWrapper>
            <Text text='ガソリンスタンド名:' />
            <InputText styles={{ width: WIDTH_INPUT }} />
          </InputWrapper>

          <InputWrapper>
            <Text text='種類:' />
            <CheckBoxContainer style={{ width: WIDTH_INPUT }}>
              <CheckBoxWrapper>
                <CheckBox type='checkbox' checked={false} onChange={() => {}} />
                <Text text={'95'}></Text>
              </CheckBoxWrapper>
              <CheckBoxWrapper>
                <CheckBox type='checkbox' checked={false} onChange={() => {}} />
                <Text text={'92'}></Text>
              </CheckBoxWrapper>
            </CheckBoxContainer>
          </InputWrapper>

          <InputWrapper>
            <Text text='地区:' />
            <select style={{ width: WIDTH_INPUT }}>
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
          </InputWrapper>

          <NormalButton
            title='検索'
            styles={{ minWidth: MIN_WIDTH_BUTTON, alignSelf: 'center' }}
          />
        </FormContainer>

        <TableContainer>
          <NormalButton title='登録' styles={{ minWidth: MIN_WIDTH_BUTTON }} />

          <Table>
            <thead>
              <TableRow>
                <TableHeader>ガソリンスタンド名</TableHeader>
                <TableHeader>種類</TableHeader>
                <TableHeader>地区</TableHeader>
                <TableHeader>Longitude, Latitude</TableHeader>
                <TableHeader>評価</TableHeader>
                <TableHeader></TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow
                onClick={() => {
                  console.log('click nè')
                }}
              >
                <TableCell>ABC</TableCell>
                <TableCell>95, 92</TableCell>
                <TableCell>Quận 12</TableCell>
                <TableCell>10.2015800, 12.0479264</TableCell>
                <TableCell>
                  <Rating type='1' />
                </TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Del</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </TableContainer>
      </MainLayout>
    </Container>
  )
}

export default ListGasStation
