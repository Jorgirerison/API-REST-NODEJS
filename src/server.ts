import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

// Título: utilizando cookies no fastfy
// Objetivo: objetivo é trabalhar com cookies para identificar os usuários e chegarmos ao mapeamento das transações do próprio usuário

const app = fastify()

// cadastro do modulo de cookies precisa acontecer antes das rotas
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
