import { UserDTO } from "../dto/userDTO";
import { getUsers } from "../repositories/userRepository";

export async function getProcessedUsers() {
  const users = await getUsers()

  if (!users) {
    return []
  }

  const userDTOs = users.map(user => new UserDTO(user).toJSON()) 
  return userDTOs
}