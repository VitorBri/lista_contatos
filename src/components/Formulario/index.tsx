import { useDispatch } from 'react-redux'
import * as S from './styles'
import { fecharFormulario } from '../../store/reducers/form'
import { BotaoSalvar } from '../../styles'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    dispatch(fecharFormulario())
  }

  const fechaJanelaFormulario = (event: FormEvent) => {
    event.preventDefault()
    dispatch(fecharFormulario())
  }

  return (
    <S.FomrContainer>
      <S.FormContent>
        <h2>Adicionar Novo Contato</h2>
        <S.BortaoFechar type="button" onClick={fechaJanelaFormulario}>
          X
        </S.BortaoFechar>
        <form onSubmit={cadastrarContato}>
          <input
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome"
          />
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="number"
            placeholder="Número"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </form>
      </S.FormContent>
    </S.FomrContainer>
  )
}
export default Formulario
