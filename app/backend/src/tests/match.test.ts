import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import SequelizeMatches from '../database/models/matches';
import SequelizeTeam from '../database/models/team';
import MatchController from '../controller/matchController';
import { matchesMock, inProgressMatchesMock } from './mocks/match.mock';
import { teamsMock } from './mocks/team.mock';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('MatchController', function () {

  afterEach(() => {
    sinon.restore();
  });

  it('should return all matches', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchesMock as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesMock);
  });

  it('should return matches filtered by inProgress', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(inProgressMatchesMock as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(inProgressMatchesMock);
  });

});
