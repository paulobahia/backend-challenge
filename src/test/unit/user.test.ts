import { handleStatus, handleCheckIsPayer, convertUnixEpochToISO, obfuscateEmail } from '../../helpers/userHelpers';

describe('User Test', () => {

  describe('obfuscateEmail', () => {
    test('return the email unchanged for niuco.com.br domain', () => {
      expect(obfuscateEmail('john.connor@niuco.com.br')).toBe('john.connor@niuco.com.br')
    });

    test('return obfuscate the emial correctly for different domains', () => {
      expect(obfuscateEmail('kyle.reese@gmail.com')).toBe('ky*****se@gmail.com')
      expect(obfuscateEmail('patrick.estrela@hotmail.com')).toBe('pa*****la@hotmail.com')
      expect(obfuscateEmail('tio.patinhas@gmail.com')).toBe('ti*****as@gmail.com')
    });
  });

  describe('handleCheckIsPayer', () => {
    test('return false for disabled users', () => {
      expect(handleCheckIsPayer('disabled', 'admin')).toBe(false)
      expect(handleCheckIsPayer('disabled', 'editor')).toBe(false)
    });

    test('return true for paid roles', () => {
      expect(handleCheckIsPayer('enabled', 'admin',)).toBe(true)
      expect(handleCheckIsPayer('enabled', 'editor')).toBe(true)
    });

    test('return false for non-paid roles', () => {
      expect(handleCheckIsPayer('enabled', 'viewer',)).toBe(false)
      expect(handleCheckIsPayer('enabled', 'system')).toBe(false)
    });
  });

  describe('handleStatus', () => {
    test('return true for enabled status', () => {
      expect(handleStatus('enabled')).toBe(true)
    });

    test('return false for disabled status', () => {
      expect(handleStatus('disabled')).toBe(false)
    });
  });

  describe('convertUnixEpochToISO', () => {
    test('return to ISO-8601', () => {
      expect(convertUnixEpochToISO('963751500')).toBe('2000-07-16T12:45:00.000Z')
      expect(convertUnixEpochToISO('0')).toBe('1970-01-01T00:00:00.000Z')
      expect(convertUnixEpochToISO('1378515007')).toBe('2013-09-07T00:50:07.000Z')
    });
  });
});