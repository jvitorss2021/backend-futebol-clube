import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import SequelizeUser from '../database/models/user';

chai.use(chaiHttp);
const { expect } = chai;

describe('Rotas do login/', function() {
  beforeEach(async () => {
    sinon.restore();
  });

  describe('POST', function() {
    it('should return a 401 error', async function() {
      sinon.stub(SequelizeUser, 'findOne').resolves(null);

      const loginRes = await chai.request(app).post('/login').send({
        email: 'carlosWrong@example.com',
        password: 'password12334',
      });

      expect(loginRes.status).to.equal(401);
      expect(loginRes.body).to.deep.equal({ message: 'Invalid email or password' });
    });
  });
});