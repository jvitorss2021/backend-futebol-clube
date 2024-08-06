import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import SequelizeTeam from '../database/models/team'
import { teamsMock } from './mocks/team.mock';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams Integration', function () {

  it('should return all teams', async function () {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teamsMock as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teamsMock);
  });
  it('should return a team by id', async function () {
    const teamId = 1;
    sinon.stub(SequelizeTeam, 'findByPk').resolves(teamsMock[0] as any);

    const { status, body } = await chai.request(app).get(`/teams/${teamId}`);

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teamsMock[0]);
  });

  afterEach(
    sinon.restore
  )
});