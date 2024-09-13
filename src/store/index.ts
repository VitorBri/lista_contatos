import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import formReducer from './reducers/form'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    form: formReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
