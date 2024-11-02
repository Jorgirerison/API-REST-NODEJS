# API REST Node.js

Este projeto é uma API RESTful desenvolvida em Node.js com TypeScript. Ela permite que os usuários criem, visualizem e gerenciem transações financeiras, mantendo um controle sobre o saldo e histórico de transações.

## Funcionalidades

- **Criar Transação**: Permite ao usuário adicionar transações do tipo crédito ou débito.
- **Resumo de Conta**: Oferece um resumo do saldo atual.
- **Listagem de Transações**: Exibe todas as transações registradas pelo usuário.
- **Visualização de Transação**: Permite ver detalhes de uma transação específica.

## Requisitos de Negócio

- **Tipo de Transação**: As transações podem ser de crédito ou débito.
- **Identificação de Usuário**: Cada transação é associada ao usuário que a criou.
- **Acesso Restrito**: O usuário só pode visualizar suas próprias transações.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Jorgirerison/API-REST-NODEJS.git

2. Instale as dependências:
    ```bash
    npm install

3. Configure as variáveis de ambiente usando o arquivo .env.example.

4. Inicie a aplicação:
    ``` bash
    npm run dev

## Tecnologias

- **Node.js**
- **TypeScript**
- **Knex.js** para consultas no banco de dados
- **Fastfy** para framework de servidor

## Como Contribuir

1. Fork o projeto.
2. Crie uma nova branch com suas alterações.
3. Envie um pull request.
