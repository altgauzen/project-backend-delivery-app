const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const server = require('../../api/app');

const { success, badRequest, notFound } = require('../../utils/dictionary/statusCode');
const loginMocks = require('../mocks/loginMocks');

describe('Verify route POST "/login"', () => {
  describe('(1) User login successful', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send(loginMocks.loginCustomer);
    });

    it('Should be able to login successfully', async () => {
      expect(response).to.have.status(success);
    });

    it('Should returns a response with hash and without password', async () => {
      expect(response.body).to.have.property('hash');
      expect(response.body).to.not.have.property('password');
    })
  });

  describe('(2) Unsuccessful login', () => {
    describe('When the email is missing', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/login')
          .send(loginMocks.loginWithoutEmail);
      });

      it('should not be able to login without a email', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"email" is required');
      });
    });

    describe('When nonstandard or incomplete email', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/login')
          .send(loginMocks.loginIncompleteEmail);
      });

      it('Should returns a "email" error message and status code', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"email" must be a valid email');
      });
    });

    describe('When password is missing', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/login')
          .send(loginMocks.loginWithoutPassword);
      });

      it('Should not be able to login without a password', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"password" is required');
      });
    });

    describe('When password has less than 6 characters', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/login')
          .send(loginMocks.loginPasswordLessThanSix);
      });

      it('should not be able to login without a password less then 6 characters', () => {
        expect(response).to.have.status(badRequest);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('"password" is required');
      });
    });

    describe('When user doenst exists in database', () => {
      let response;
      before(async () => {
        response = await chai.request(server)
          .post('/login')
          .send(loginMocks.loginCustomer);
      });

      it('Should not be able to login with a user that does not exists', () => {
        expect(response).to.have.status(notFound);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.equal('Not Found');
      });
    });
  });
});

