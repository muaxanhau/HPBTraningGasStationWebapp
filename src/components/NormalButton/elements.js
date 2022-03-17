import styled from 'styled-components'

export const Button = styled.button`
  border-radius: var(--border-radius-1);
  background-color: var(--color-1);
  padding: var(--padding-1);
  border: 1px solid var(--color-5);
  width: fit-content;
  color: var(--color-2);

  &:focus {
    background-color: var(--color-5);
  }
`
