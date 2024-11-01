import fastify from "fastify";
import router from "./routes/userRouter";

const PORT = Number(process.env.PORT)

const server = fastify({ logger: true })

server.listen({ port: PORT })
server.register(router)

console.log(`O server esta no ar 🚀! http://localhost:${PORT}`)