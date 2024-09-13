import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;

  p {
    font-size: 14px;
    margin-bottom: 6px;
    display: flex;
  }

  input {
    color: ${variaveis.cinza};
    border: none;
    padding-left: 8px;
    background-color: #ffff;
    width: 75%;

    &:focus {
      outline: none;
      border-bottom: 1px solid #000;
    }
  }
`
export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Botao = styled.button`
  padding: 4px 8px;
  background-color: ${variaveis.amarelo};
  color: #ffff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  margin-right: 8px;

  &:hover {
    opacity: 0.8;
  }
`
export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  margin-top: 16px;
`

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
