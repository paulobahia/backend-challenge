import { convertUnixEpochToISO, handleCheckIsPayer, handleStatus, obfuscateEmail } from "../helpers/userHelpers"

export class UserDTO {
  private id: string
  private name: string
  private email: string
  private lastActivity: string
  private isPayer: boolean
  private status: boolean

  constructor(user: IUserModel) {
    this.id = user.id;
    this.name = user.name;
    this.email = obfuscateEmail(user.email);
    this.lastActivity = convertUnixEpochToISO(user.last_activity);
    this.isPayer = handleCheckIsPayer(user.status, user.role)
    this.status = handleStatus(user.status)
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      lastActivity: this.lastActivity,
      isPayer: this.isPayer,
      status: this.status
    }
  }
}