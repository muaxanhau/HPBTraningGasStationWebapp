import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`
export const Wrapper = styled.div`
  aspect-ratio: 1;
  padding: var(--padding-2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--color-1);
`
