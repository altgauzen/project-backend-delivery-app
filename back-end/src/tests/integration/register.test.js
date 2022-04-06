const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const server = require('../../api/app');

const { created, badRequest, conflict } = require('../../utils/dictionary/statusCode');
const userMocks = require('../mocks/userMocks');

describe('Verify route POST "/register"', () => {
  describe('(1) User registration successful', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/register')
        .send(userMocks.customer);
    });

    it('should be able to register a user', async () => {
      expect(response).to.have.status(created);
    });

    it('Should returns a response with hash and without password', async () => {
      expect(response.body).to.have.property('hash');
      expect(response.body).to.not.have.property('password');
    })
  });

  describe('(2) Unsuccessful registration', () => {
    describe('When the name is missing', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.withoutName);
      });

      it('should not be able to register a user without a name', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"name" is required');
      });
    });

    describe('When the name has less than 12 characters', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.nameLessThenTwelve);
      });

      it('should returns a "name" error message and status code', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"name" length must be at least 12 characters long');
      });
    });

    describe('When email is missing', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.withoutEmail);
      });

      it('should returns a "email" error message and status code', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"email" is required');
      });
    });

    describe('When nonstandard or incomplete email', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.incompleteEmail);
      });

      it('should returns a "email" error message and status code', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"email" must be a valid email');
      });
    });

    describe('When password is missing', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.withoutPassword);
      });

      it('should not be able to register a user without a password', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"password" is required');
      });
    });

    describe('When password has less than 6 characters', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.passwordLessThanSix);
      });

      it('should not be able to register a user without a password', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"password" is required');
      });
    });

    describe('When user already exists', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/register')
          .send(userMocks.customer);
      });

      it('Should not be able to register same user twice', () => {
        expect(response).to.have.status(conflict);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"user" already exists');
      });
    });
  });
});
