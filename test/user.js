import chai from 'chai';
import User from '../models/user';


const { expect } = chai;


describe('Model User', () => {
  describe('function find()', () => {
    it('should return an object when id matches an existing id', (done) => {
      expect(User.find(1)).to.be.an('object');
      done();
    });

    it('should return null when id can not be found', (done) => {
      expect(User.find(7)).to.be.null;
      done();
    });
  });

  describe('function add()', () => {
  	it('should populate the users db', (done) => {
  		User.add({ name: 'Adekunle Ajasin', address: 'Nairobi, Kenya', role: 'Software Developer' });
      expect(User.all()).to.be.length(4);
      done();
    });

    // You should write more scenarios for the add() function;
  });


  // You can include test on other functions in user class here
});
