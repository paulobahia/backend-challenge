export function convertUnixEpochToISO(unix: string) {
  return new Date(Number(unix) * 1000).toISOString()
}

export function handleStatus(status: string): boolean {
  return status === 'enabled'
}

export function handleCheckIsPayer(status: 'enabled' | 'disabled', role: 'viewer' | 'system' | 'editor' | 'admin'): boolean {
  const isEnable = status == 'enabled';
  const isSubscriberRole = ['editor', 'admin'].includes(role);
  return isEnable && isSubscriberRole
}

export function obfuscateEmail(email: string): string {
  const [name, domain] = email.split('@');

  if (domain == 'niuco.com.br') {
    return email
  }

  const nameLenght = name.length

  const obfuscateEmail = `${name.substring(0, 2)}${"*".repeat(5)}${name.substring(nameLenght - 2)}`

  return `${obfuscateEmail}@${domain}`
}