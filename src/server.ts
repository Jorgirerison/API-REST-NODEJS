import { app } from './app'
import { env } from './env'

// Título: configurando banco de testes
// Objetivo: segmentar ou criar um bd que o teste usa do bd que sobe para produção

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER Running!')
  })
