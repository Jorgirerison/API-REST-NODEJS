import { app } from './app'
import { env } from './env'

// Título: testando listagem de transações
// Objetivo: objetivo da aula é além de criar o cookie p/dar seguimento a listagem é a de capturar e setar parametros das requisições e transações

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
