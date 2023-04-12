import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
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
  max-width: 440px;
  width: full;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`

export const Box = styled.div`
  display: flex;
  padding: 0.8rem;
  width: full;
  height: 7.2rem;
  background-color: #fff;
  box-shadow: 0px 4px 16px #eae2fd;
  border-radius: 8px;
  gap: 1.2rem;
  position: relative;
`
interface BoxIconProps {
  color: string
  bgColor: string
}

export const BoxIcon = styled.div<BoxIconProps>`
  padding: 1.6rem 1.2rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.4rem;
  color: ${(props) => props.color};
`

export const BoxInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
export const BoxDataFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  strong {
    font-size: 1.4rem;
    color: #575361;
  }
  p {
    font-size: 1.2rem;
    color: #857e95;
    font-weight: 500;
  }
`

interface BoxProgressBarProps {
  bgColor?: string
  variant?: 'done' | 'process' | 'error'
}

export const BoxProgressBar = styled.div<BoxProgressBarProps>`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.4rem;
  align-items: center;

  progress {
    flex: 1;
    height: 0.8rem;
    appearance: none;
    --webkit-appearance: none;
    border-radius: 999px;
    overflow: hidden;

    &::-webkit-progress-bar {
      background-color: #e3e3ed;
    }

    &::-webkit-progress-value {
      background: ${(props) => props.bgColor};
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ variant }) =>
      variant === 'done'
        ? '#4E884D'
        : variant === 'error'
        ? '#E36363'
        : '#9892A6'};
  }
`

export const BoxDelete = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  color: #794fed;
  cursor: pointer;
`
