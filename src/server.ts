import fastify from 'fastify'
import { knex } from './database'

// Título: Criando tabela de transações
// Objetivo: Ajustando o knex ao ts além também do versionamento do bd

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
