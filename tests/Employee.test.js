const Employee = require('../lib/Employee.js');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, and email', () => {
      const employee = new Employee('Jon', 123, 'jon@example.com');
      expect(employee.name).toEqual('Jon');
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual('jon@example.com');
    });
  });

  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Jon', 123, 'jon@example.com');
      expect(employee.getName()).toEqual('Jon');
    });
  });

  describe('getRole', () => {
    it('should return the role of the employee as "Employee"', () => {
      const employee = new Employee('Jon', 123, 'jon@example.com');
      expect(employee.getRole()).toEqual("Employee");
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee', () => {
      const employee = new Employee('Jon', 123, 'jon@example.com');
      expect(employee.getEmail()).toEqual('jon@example.com');
    });
  });
});