const { expect } = require("chai");
const sinon = require('sinon');

const userServices = require('../../services/users.service');
const { User } = require('../../database/models');

const userMocks = require('../mocks/userMocks');

describe('Services', () => {
  describe('usersServices', () => {
    describe('#getAll', () => {
      describe('When there are no users in the database', () => {
        before(() => {
          sinon.stub(User, 'findAll').resolves(userMocks.empty);
        });

        after(() => {
          User.findAll.restore();
        })

        it('returns an empty array', async () => {
          const users = await userServices.getUserAll();
          expect(users).to.deep.eq(userMocks.empty);
        });
      });

      describe('When "Users" table has data', () => {
        before(() => {
          sinon.stub(User, 'findAll').resolves(userMocks.customer);
        });

        after(() => {
          User.findAll.restore();
        })

        it('returns expected elements', async () => {
          const users = await userServices.getUserAll();
          expect(users).to.deep.eq(userMocks.customer);
        });
      });
    });

    describe('#create', () => {

      before(() => {
        const { name, email, password, role } = userMocks.inserted;
        sinon.stub(User, 'create').resolves(userMocks.customer);
      })

      after(() => {
        User.create.restore();
      })

      it('should returns an object with atributes id, name, email, password, role', async () => {
        const { name, email, password, role } = userMocks.inserted;

        const user = await userServices.createUser({ name, email, password, role });
        console.log('NO USER CONTROLLER TEST, VEM USER?', user);
        expect(user).to.deep.eq(userMocks.inserted);
      })
    });
  })
})