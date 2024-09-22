import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

// resolvendo provisoriamente o subscrito de erro em filename, devido a possibildade de process.env.DATABASE_URL ser undefined
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
