import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { Main } from './styles'
import { abrirFormulario } from '../../store/reducers/form'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import Formulario from '../../components/Formulario'

const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const isFormOpen = useSelector((state: RootReducer) => state.form.isOpen)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Main>
      <h1>Meus Contatos</h1>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              email={c.email}
              nome={c.nome}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
      <BotaoAdicionar onClick={() => dispatch(abrirFormulario())} />
      {isFormOpen && <Formulario />}
    </Main>
  )
}

export default ListaDeContatos
