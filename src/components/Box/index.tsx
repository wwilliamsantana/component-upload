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
  const sizeFormat =
    data.size < 1000 ? `${data.size} KB` : `${data.size / 1000} MB`

  function DeleteFile() {
    removeItem(data.id)
  }

  return (
    <BoxWrapper>
      <BoxIcon color="#AC96E4" bgColor="#E9E3F8">
        <File size={24} weight="fill" />
      </BoxIcon>
      <BoxInfo>
        <BoxDataFile>
          <strong>{data.name}</strong>
          <p>{sizeFormat}</p>
        </BoxDataFile>

        <BoxProgressBar bgColor="linear-gradient(90deg,rgba(58, 97, 237, 0.52) 0%,#7c3aed 100%)">
          <progress value={46} max={100}></progress>
          <p>46%</p>
        </BoxProgressBar>
      </BoxInfo>

      <BoxDelete onClick={DeleteFile}>
        <X size={18} />
      </BoxDelete>
    </BoxWrapper>
  )
}
