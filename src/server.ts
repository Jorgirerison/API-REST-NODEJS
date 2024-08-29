import fastify from 'fastify'
import { knex } from './database'

// Título: EcmaScript Lint
// Objetivo: Padronizar preferências (como aspas e espaçoes), além de corrigir automaticamente

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
