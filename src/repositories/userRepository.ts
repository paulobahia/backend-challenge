import { server } from "../utils/apiClient"

export async function getUsers(): Promise<IUserModel[] | null> {
  try {
    const response = await server.get('/users')
    return response.data
  } catch (error) {
    console.error("Erro ao buscar usuários")
    throw new Error("Ocorreu um erro no servidor.")
  }
}