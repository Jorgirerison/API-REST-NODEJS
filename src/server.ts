import { app } from './app'
import { env } from './env'

// Título: preparando p/deploy
// Objetivo: cuidando de ajustar a conversão de ts para js para assim ser deployado

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
