const { assert, expect } = require("chai");
const sinon = require('sinon');

const productController = require('../../controllers/products.controller');
const productService = require('../../services/products.service');

const productMocks = require('../mocks/productMocks');

describe('Controllers', () => {
  describe('productController', () => {
    describe('#getAll', () => {
      describe('When there are no data in database', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(productService, 'getAllProductsService').resolves([]);
        });

        after(() => {
          productService.getAllProductsService.restore();
        });

        it('should call "res.status" function', async () => {
          await productController.getAllProducts(req, res);
          expect(res.status.called).to.be.true;
        });

        it('should call "res.status" function with the value 200', async () => {
          await productController.getAllProducts(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });

        it('should call "res.json" function', async () => {
          await productController.getAllProducts(req, res);
          expect(res.json.called).to.be.true;
        });

        it('should call "res.json" function with empty array', async () => {
          await productController.getAllProducts(req, res);
          expect(res.json.calledWith([])).to.be.true;
        });
      })

      describe('When there are products in database', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(productService, 'getAllProductsService').resolves(productMocks.products);
        });

        after(() => {
          productService.getAllProductsService.restore();
        });

        it('should call "res.status" function with the value 200', async () => {
          await productController.getAllProducts(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });

        it('should call "res.json" function with the expect elements', async () => {
          await productController.getAllProducts(req, res);
          expect(res.json.calledWith(productMocks.products)).to.be.true;
        });
      })
    });
  })
});
