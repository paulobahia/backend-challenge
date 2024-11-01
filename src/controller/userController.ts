import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getProcessedUsers } from "../service/userService";

export default async function userController(fastify: FastifyInstance) {
  fastify.get("/", async (_: FastifyRequest, reply: FastifyReply) => {
    try {
      const users = await getProcessedUsers();
      reply.send(users)
    } catch (error) {
      console.error("Erro ao buscar usuarios", error);
      reply.status(500).send({ error: 'Ocorreu um erro no servidor.' })
    }
  })
}