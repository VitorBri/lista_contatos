import { Circulo } from './styles'

type BotaoAdicionarProps = {
  onClick: () => void
}
const BotaoAdicionar: React.FC<BotaoAdicionarProps> = ({ onClick }) => {
  return <Circulo onClick={onClick}>+</Circulo>
}
export default BotaoAdicionar
