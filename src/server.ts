import fastify from "fastify";
import router from "./routes/userRouter";

const PORT = Number(process.env.PORT)

const server = fastify({
  logger: {
    // level: 'info',
    // file: 'logs/server.log',
    // Utilizar somente em modo de desenvolvimento
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  }
})

server.listen({ port: PORT })
server.register(router)

server.log.info(`O server esta no ar! http://localhost:${PORT}`)