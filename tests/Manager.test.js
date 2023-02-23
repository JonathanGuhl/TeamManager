const Manager = require('../lib/Manager.js');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and office number', () => {
      const manager = new Manager('Jon', 123, 'jon@example.com', 101);
      expect(manager.name).toEqual('Jon');
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual('jon@example.com');
      expect(manager.officeNumber).toEqual(101);
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      const manager = new Manager('Jon', 123, 'jon@example.com', 101);
      expect(manager.getRole()).toEqual('Manager');
    });
  });

  describe('getOfficeNumber', () => {
    it('should return the office number', () => {
      const manager = new Manager('Jon', 123, 'jon@example.com', 101);
      expect(manager.getOfficeNumber()).toEqual(101);
    });
  });

  describe('Inheritance', () => {
    it('should inherit properties and methods from the Employee class', () => {
      const manager = new Manager('Jon', 123, 'jon@example.com', 101);
      expect(manager.getName()).toEqual('Jon');
      expect(manager.getId()).toEqual(123);
      expect(manager.getEmail()).toEqual('jon@example.com');
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
