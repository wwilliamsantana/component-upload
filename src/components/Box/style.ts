import styled from 'styled-components'

export const BoxWrapper = styled.div`
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
  background-color: ${({ bgColor }) => bgColor};
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
  variant?: 'done' | 'process'
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
    color: ${({ variant }) => (variant === 'done' ? '#4E884D' : '#9892A6')};
  }
`

export const BoxDelete = styled.div<{ color: string }>`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  color: ${(props) => props.color};
  /* color: #794fed; */
  cursor: pointer;
`
