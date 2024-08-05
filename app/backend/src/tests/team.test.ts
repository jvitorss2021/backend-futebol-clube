import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaihttp from 'chai-http';
chai.use(chaihttp);

const { expect } = chai;

describe('GET /teams', () => {
  it('should return all teams', async () => {
    const res = await chai.request(app).get('/teams');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
