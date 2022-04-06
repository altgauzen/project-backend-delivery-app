const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const server = require('../../api/app');

const loginMocks = require('../mocks/loginMocks');
const productMocks = require('../mocks/productMocks');

describe('Verify route GET "/getProductsAll"', () => {
  describe('(1) List all products successfully', () => {
    let response;
    let token;
    let id;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send(loginMocks.loginCustomer);
      token = response.token;

      response = await chai.request(server)
        .get('/getProductsAll')
        .auth(token);
    });

    it('Should return success status', async () => {
      expect(response).to.have.status(success);
    });

    it('Should return list of 11 products', async () => {
      expect(response.body).to.have.an('array');
      expect(response.body.lenght).to.be.equal(11);
      expect(response.body[0]).to.be.equal(productMocks.products[0]);
      expect(response.body[3]).to.be.equal(productMocks.products[3]);
    })
  });
});