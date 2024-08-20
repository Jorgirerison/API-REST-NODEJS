import fastify from 'fastify'

// Título: EcmaScript Lint
// Objetivo: Padronizar preferências (como aspas e espaçoes), além de corrigir automaticamente

const app = fastify()

app.get('/hello', () => {
  return 'Hello Node.js'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
