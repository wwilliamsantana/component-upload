import { X, File } from '@phosphor-icons/react'
import {
  BoxWrapper,
  BoxIcon,
  BoxInfo,
  BoxDataFile,
  BoxProgressBar,
  BoxDelete,
} from './style'
import { useEffect, useState } from 'react'

interface BoxProps {
  data: {
    id: number
    name: string
    size: number
  }
  removeItem: (id: number) => void
}

export function Box({ data, removeItem }: BoxProps) {
  const [progressValue, setProgressValue] = useState(0)

  function DeleteFile() {
    removeItem(data.id)
  }

  const sizeFormat =
    data.size < 1000 ? `${data.size} KB` : `${data.size / 1000} MB`

  const validateProgressBar = progressValue < 100

  useEffect(() => {
    setTimeout(() => {
      if (progressValue < 100) {
        setProgressValue((state) => state + 1)
      }
    }, 10)
  }, [progressValue])

  return (
    <BoxWrapper>
      <BoxIcon
        color={validateProgressBar ? '#AC96E4' : '#73B172'}
        bgColor={validateProgressBar ? '#E9E3F8' : '#DAF2D9'}
      >
        <File size={24} weight="fill" />
      </BoxIcon>
      <BoxInfo>
        <BoxDataFile>
          <strong>{data.name}</strong>
          <p>{sizeFormat}</p>
        </BoxDataFile>
        <BoxProgressBar
          bgColor={
            validateProgressBar
              ? 'linear-gradient(90deg,rgba(58, 97, 237, 0.52) 0%,#7c3aed 100%)'
              : '#73B172'
          }
          variant={validateProgressBar ? 'process' : 'done'}
        >
          <progress value={progressValue} max={100}></progress>
          <p>{progressValue}%</p>
        </BoxProgressBar>
      </BoxInfo>

      <BoxDelete
        onClick={DeleteFile}
        color={validateProgressBar ? '#794fed' : '#73B172'}
      >
        <X size={18} />
      </BoxDelete>
    </BoxWrapper>
  )
}
