import { CloudArrowUp, File } from '@phosphor-icons/react'
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

export function App() {
  return (
    <Container>
      <UploadArea>
        <CloudArrowUp size={48} />
        <strong>Importe seus arquivos</strong>
        <p>Arraste ou clique para fazer upload</p>
        <input type="file" id="inputFile" />
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

          <BoxDelete>x</BoxDelete>
        </Box>

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
      </BoxContainer>
    </Container>
  )
}
