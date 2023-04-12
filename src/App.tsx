import { CloudArrowUp } from '@phosphor-icons/react'
import { Container, UploadArea } from './styles/app'

export function App() {
  return (
    <Container>
      <UploadArea>
        <CloudArrowUp size={48} />
        <strong>Importe seus arquivos</strong>
        <p>Arraste ou clique para fazer upload</p>
        <input type="file" id="inputFile" />
      </UploadArea>
    </Container>
  )
}
