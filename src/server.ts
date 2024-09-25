import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

// Título: plugins do fastify
// Objetivo: separar as rotas( ou funcionalidades) em pequenos arquivos

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
