import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import * as S from './styles'
import { fecharFormulario } from '../../store/reducers/form'
import { BotaoSalvar } from '../../styles'
import { cadastrar } from '../../store/reducers/contatos'
import InputMask from 'react-input-mask'

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
          <InputMask
            mask="(99) 99999-9999"
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="text"
            placeholder="Número"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </form>
      </S.FormContent>
    </S.FomrContainer>
  )
}
export default Formulario
