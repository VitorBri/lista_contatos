import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import ContatoClass from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contatos'
import { BotaoSalvar } from '../../styles'
import InputMask from 'react-input-mask'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  telefone: telefoneOriginal,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0 && telefoneOriginal.length > 0) {
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEditar() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em> Editanto: </em>}
        {nome}
      </S.Nome>
      <p>
        Email:{' '}
        <input
          type="email"
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </p>
      <p>
        Telefone:{' '}
        <InputMask
          mask="(99) 99999-9999"
          type="text"
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </p>
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.BotaoCancelarERemover onClick={cancelarEditar}>
              Cancelar
            </S.BotaoCancelarERemover>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    telefone,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
