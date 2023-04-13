import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  margin: 2rem 0;
`

export const UploadArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 440px;
  height: 160px;

  background-color: #f3f0ff;
  border-radius: 0.8rem;
  border: 1px dashed #c1b2fa;
  position: relative;
  cursor: pointer;

  svg {
    color: #7c3aed;
  }

  strong {
    margin-top: 1.2rem;
    color: #7a5fec;
    font-weight: 700;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #746e82;
  }

  input {
    opacity: 0;
    inset: 0;
    position: absolute;
  }
`
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`
