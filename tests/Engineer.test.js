const Engineer = require('../lib/Engineer.js');


describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and github username', () => {
      const engineer = new Engineer('Jon', 123, 'jon@example.com', 'jon-github');
      expect(engineer.name).toEqual('Jon');
      expect(engineer.id).toEqual(123);
      expect(engineer.email).toEqual('jon@example.com');
      expect(engineer.github).toEqual('jon-github');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer('Jon', 123, 'jon@example.com', 'jon-github');
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });

  describe('getGithub', () => {
    it('should return the github username', () => {
      const engineer = new Engineer('Jon', 123, 'jon@example.com', 'jon-github');
      expect(engineer.getGithub()).toEqual('jon-github');
    });
  });

  describe('Inheritance', () => {
    it('should inherit properties and methods from the Employee class', () => {
      const engineer = new Engineer('Jon', 123, 'jon@example.com', 'jon-github');
      expect(engineer.getName()).toEqual('Jon');
      expect(engineer.getId()).toEqual(123);
      expect(engineer.getEmail()).toEqual('jon@example.com');
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
