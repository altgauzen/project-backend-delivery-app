const { assert, expect } = require("chai");
const sinon = require('sinon');

const userController = require('../../controllers/users.controller');
const userService = require('../../services/users.service');

const userMocks = require('../mocks/userMocks');

describe('Controllers', () => {
  describe('userController', () => {
    describe('#getAll', () => {
      describe('When there are no data in database', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(userService, 'getUserAll').resolves(userMocks.empty);
        });

        after(() => {
          userService.getUserAll.restore();
        });

        it('should call "res.status" function', async () => {
          await userController.getAllUsers(req, res);
          expect(res.status.called).to.be.true;
        });

        it('should call "res.status" function with the value 200', async () => {
          await userController.getAllUsers(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });

        it('should call "res.json" function', async () => {
          await userController.getAllUsers(req, res);
          expect(res.json.called).to.be.true;
        });

        it('should call "res.json" function with empty array', async () => {
          await userController.getAllUsers(req, res);
          expect(res.json.calledWith(userMocks.empty)).to.be.true;
        });
      })

      describe('When there are users in database', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(userService, 'getUserAll').resolves(userMocks.customer);
        });

        after(() => {
          userService.getUserAll.restore();
        });

        it('should call "res.status" function with the value 200', async () => {
          await userController.getAllUsers(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });

        it('should call "res.json" function with the expect elements', async () => {
          await userController.getAllUsers(req, res);
          expect(res.json.calledWith(userMocks.customer)).to.be.true;
        });
      })
    });
  })
});
