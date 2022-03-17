import styled from 'styled-components'

export const Input = styled.input`
  outline: none;
  width: 220px;

  &:focus {
    box-shadow: inset 0px 0px 4px var(--color-5), 0 0 5px var(--color-5);
  }
`
