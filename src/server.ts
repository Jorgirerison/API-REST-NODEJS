import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

// Título: validando existência dos cookies
// Objetivo: segmentar de vez por session_id os usuários para que só façam alterações e vejam somente suas transações

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
