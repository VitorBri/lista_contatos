import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled.button`
  display: flex;
  height: 50px;
  width: 50px;
  background-color: ${variaveis.verde};
  color: #ffff;
  position: fixed;
  bottom: 40px;
  right: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
