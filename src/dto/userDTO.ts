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
    this.email = this.obfuscateEmail(user.email);
    this.lastActivity = new Date(user.last_activity).toISOString();
    this.isPayer = this.handleCheckIsPayer(user.status, user.role)
    this.status = this.handleStatus(user.status)
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

  private handleStatus(status: string): boolean {
    return status === 'enabled'
  }

  private handleCheckIsPayer(status: string, role: string): boolean {
    const isEnable = status == 'enabled';
    const isSubscriberRole = ['editor', 'admin'].includes(role);
    return isEnable && isSubscriberRole
  }

  private obfuscateEmail(email: string): string {
    const [name, domain] = email.split('@');

    if (domain == 'niuco.com.br') {
      return email
    }
    
    const nameLenght = name.length
    
    const obfuscateEmail = `${name.substring(0, 2)}${"*".repeat(5)}${name.substring(nameLenght - 2)}`

    return `${obfuscateEmail}@${domain}`
  }
}