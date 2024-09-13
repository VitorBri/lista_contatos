import { createSlice } from '@reduxjs/toolkit'

type FormularioState = {
  isOpen: boolean
}

const initialState: FormularioState = {
  isOpen: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    abrirFormulario: (state) => {
      state.isOpen = true
    },
    fecharFormulario: (state) => {
      state.isOpen = false
    }
  }
})

export const { abrirFormulario, fecharFormulario } = formSlice.actions

export default formSlice.reducer
