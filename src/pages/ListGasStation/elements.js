import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleContainer = styled.div`
  position: relative;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-1);
`
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
export const Table = styled.table`
  border: 1px solid var(--color-3);
  border-spacing: 0px;

  & tbody tr {
    &:nth-child(2n) {
      background-color: var(--color-4);
    }

    &:hover * {
      background-color: var(--color-5);
      color: var(--color-2);
    }
  }
`
export const TableRow = styled.tr`
  border: 1px solid var(--color-3);

  cursor: pointer;
`
export const TableHeader = styled.th`
  border: 1px solid var(--color-3);
  color: var(--color-2);
  min-width: 50px;
  padding: 5px 15px;
  background-color: var(--color-1);
`
export const TableCell = styled.td`
  border: 1px solid var(--color-3);
  padding: 5px 15px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: var(--gap-1);
  align-items: center;
`
export const CheckBox = styled.input``
