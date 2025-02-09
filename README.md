# Gerenciador de Contatos

Uma aplicação simples para gerenciar contatos, permitindo cadastrar, editar e remover contatos. Desenvolvido com React, Redux Toolkit, TypeScript e Styled Components.

## Funcionalidades

- **Listar contatos**: Exibe todos os contatos cadastrados.
- **Cadastrar contatos**: Adiciona novos contatos à lista.
  - **Campos obrigatórios**: Nome, e-mail e telefone.
  - **Validação**: O campo de telefone é formatado automaticamente com máscara `(99) 99999-9999`.
- **Editar contatos**: Permite atualizar as informações de um contato existente.
  - **Campos editáveis**: E-mail e telefone.
- **Remover contatos**: Exclui um contato da lista.

## Tecnologias Utilizadas

- React
- Redux Toolkit
- TypeScript
- Styled Components (para estilização)
- `react-input-mask` (para formatar o campo de telefone)

## Estrutura de Estilos

- **Estilos Globais**:
  - Define a fonte padrão como `Roboto`.
  - Remove margens, paddings e estilos de lista padrão.
  - Remove as setas de incremento/decremento dos inputs do tipo `number`.

- **Container**:
  - Centralizado com largura máxima de `768px`.
  - Fundo branco, padding e bordas arredondadas.

- **Botões**:
  - `BotaoSalvar`: Estilizado com uma cor de fundo verde, definida por uma variável.

## Como Configurar

1. Clone o repositório:

   ```bash
   git clone https://github.com/VitorBri/lista_contatos.git
   cd gerenciador-contatos
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm start
   ```

   Isso iniciará o servidor de desenvolvimento e abrirá o projeto no navegador.

## Estrutura do Projeto

- `src/`:
  - `components/`: Componentes reutilizáveis.
  - `Contato/`: Componente para exibir e editar um contato individual.
  - `Formulario/`: Componente para adicionar novos contatos.
  - `containers/`: Componentes principais da aplicação.
  - `store/`: Configuração do Redux Toolkit.
  - `slices/`: Reducers e actions.
  - `styles/`: Estilos globais e componentes estilizados.
  - `variaveis.js`: Variáveis de estilo (cores, fontes, etc.).
  - `models/`: Definições de tipos (TypeScript).
  - `App.tsx`: Componente principal da aplicação.

## Como Usar

- **Adicionar um contato**:
  1. Clique no botão "Adicionar Contato".
  2. Preencha o formulário com nome, e-mail e telefone.
  3. Clique em "Cadastrar" para salvar ou "X" para fechar o formulário.

- **Editar um contato**:
  1. Clique no botão "Editar" ao lado do contato.
  2. Atualize as informações de e-mail e telefone.
  3. Clique em "Salvar" para confirmar ou "Cancelar" para descartar as alterações.

- **Remover um contato**:
  1. Clique no botão "Excluir" ao lado do contato.
  2. Confirme a exclusão.

## Licença

Este projeto está sob a licença MIT.

