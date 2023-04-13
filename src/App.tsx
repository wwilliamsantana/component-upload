import { CloudArrowUp } from '@phosphor-icons/react'
import { BoxContainer, Container, UploadArea } from './styles/app'
import { ChangeEvent, useState } from 'react'
import { Box } from './components/Box'

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

      setFiles((state) => [{ id: files.length, name, size }, ...state])
    }
  }

  function removeItem(id: number) {
    setFiles((state) => [...state.filter((item) => item.id !== id)])
  }

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
        {files.map((item) => {
          return <Box key={item.id} data={item} removeItem={removeItem} />
        })}

        {/*
        Box ERROR exmeplo!
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
