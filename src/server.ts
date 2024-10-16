import { app } from './app'
import { env } from './env'

// Título: testando criação de transação
// Objetivo: instalação da ferramenta supertest para teste de criação com post

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
