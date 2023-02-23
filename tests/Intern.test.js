const Intern = require('../lib/Intern.js');


describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school', () => {
      const intern = new Intern('Jon', 123, 'jon@example.com', 'KU');
      expect(intern.name).toEqual('Jon');
      expect(intern.id).toEqual(123);
      expect(intern.email).toEqual('jon@example.com');
      expect(intern.school).toEqual('KU');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const intern = new Intern('Jon', 123, 'jon@example.com', 'KU');
      expect(intern.getRole()).toEqual('Intern');
    });
  });

  describe('getSchool', () => {
    it('should return the name of the interns school', () => {
      const intern = new Intern('Jon', 123, 'jon@example.com', 'KU');
      expect(intern.getSchool()).toEqual('KU');
    });
  });

  describe('Inheritance', () => {
    it('should inherit properties and methods from the Employee class', () => {
      const intern = new Intern('Jon', 123, 'jon@example.com', 'KU');
      expect(intern.getName()).toEqual('Jon');
      expect(intern.getId()).toEqual(123);
      expect(intern.getEmail()).toEqual('jon@example.com');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
