import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const FomrContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.div`
  position: relative;
  background: #ffff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid;
    border-radius: 4px;
    }
  }
`

export const BortaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  background-color: ${variaveis.vermelho};
  color: #fff;
  bottom: 40px;
  right: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
