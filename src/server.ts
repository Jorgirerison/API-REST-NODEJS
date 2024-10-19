import { app } from './app'
import { env } from './env'

// Título: categorizando os testes
// Objetivo: organizar por categorias os testes para receber logs objetivos de onde está o erro

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
