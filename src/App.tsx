import {
  ArrowCounterClockwise,
  CloudArrowUp,
  File,
  X,
} from '@phosphor-icons/react'
import {
  Box,
  BoxContainer,
  BoxDataFile,
  BoxDelete,
  BoxIcon,
  BoxInfo,
  BoxProgressBar,
  Container,
  UploadArea,
} from './styles/app'
import { ChangeEvent, useState } from 'react'

interface FilesPorps {
  id: number
  name: string
  size: number
}

export function App() {
  const [files, setFiles] = useState<FilesPorps[]>([])

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files[0].type !== 'text/plain') {
      return alert('Erro File')
    } else {
      const { name, size } = e.target.files[0]

      setFiles((state) => [...state, { id: files.length, name, size }])
    }
  }

  console.log(files)

  return (
    <Container>
      <UploadArea>
        <CloudArrowUp size={48} />
        <strong>Importe seus arquivos</strong>
        <p>Arraste ou clique para fazer upload</p>
        <input
          type="file"
          id="inputFile"
          onChange={handleFile}
          accept="text/plain"
        />
      </UploadArea>

      <BoxContainer>
        <Box>
          <BoxIcon color="#AC96E4" bgColor="#E9E3F8">
            <File size={24} weight="fill" />
          </BoxIcon>
          <BoxInfo>
            <BoxDataFile>
              <strong>README.rm</strong>
              <p>30 MB / 74 MB</p>
            </BoxDataFile>

            <BoxProgressBar bgColor="linear-gradient(90deg,rgba(58, 97, 237, 0.52) 0%,#7c3aed 100%)">
              <progress value={46} max={100}></progress>
              <p>46%</p>
            </BoxProgressBar>
          </BoxInfo>

          <BoxDelete>
            <X size={18} />
          </BoxDelete>
        </Box>

        {/*
        <Box>
          <BoxIcon color="#73B172" bgColor="#DAF2D9">
            <File size={24} weight="fill" />
          </BoxIcon>
          <BoxInfo>
            <BoxDataFile>
              <strong>Scann_158.pdf</strong>
              <p>30 MB </p>
            </BoxDataFile>

            <BoxProgressBar bgColor="#73B172" variant="done">
              <progress value={100} max={100}></progress>
              <p>100%</p>
            </BoxProgressBar>
          </BoxInfo>
        </Box>
        <Box>
          <BoxIcon color="#E36363" bgColor="#F2D9D9">
            <File size={24} weight="fill" />
          </BoxIcon>
          <BoxInfo>
            <BoxDataFile>
              <strong>picture1.jpg</strong>
              <p>6 MB</p>
            </BoxDataFile>

            <BoxProgressBar variant="error">
              <progress value={0} max={100}></progress>
              <p>Erro</p>
            </BoxProgressBar>
          </BoxInfo>

          <BoxDelete>
            <ArrowCounterClockwise size={18} />
          </BoxDelete>
        </Box>
    */}
      </BoxContainer>
    </Container>
  )
}
