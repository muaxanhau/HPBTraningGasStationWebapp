import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-1);
`
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
export const CommentWrapper = styled.div`
  background-color: var(--color-4);
  border-radius: var(--border-radius-1);
  border: 1px solid var(--color-3);
  padding: var(--padding-1);
  max-width: 720px;
`
