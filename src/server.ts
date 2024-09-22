import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

// Título: variáveis de ambiente
// Objetivo: ambientes são os momentos da aplicação, teste, produção, desenvolvimento...

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
