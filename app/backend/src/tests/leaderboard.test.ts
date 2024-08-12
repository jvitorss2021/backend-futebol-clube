import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import LeaderboardService from '../service/leaderboardService';
import TeamService from '../service/TeamService';
import MatchService from '../service/matchService';
import { matchesMock, leaderboardMock } from './mocks/leaderboard.mock';
import { teamsMock } from './mocks/team.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('LeaderboardService and LeaderboardController', function () {
  afterEach(() => {
    sinon.restore();
  });
  describe('LeaderboardService', function () {
    it('should return a sorted and calculated leaderboard', async function () {
      sinon.stub(TeamService.prototype, 'getAllTeams').resolves(teamsMock);
      sinon.stub(MatchService, 'getMatches').resolves(matchesMock);

      const result = await LeaderboardService.getHomeLeaderboard();

      expect(result).to.deep.equal(leaderboardMock);
    });

    it('should call getAllTeams and getMatches with correct arguments', async function () {
      const getAllTeamsStub = sinon.stub(TeamService.prototype, 'getAllTeams').resolves(teamsMock);
      const getMatchesStub = sinon.stub(MatchService, 'getMatches').resolves(matchesMock);

      await LeaderboardService.getHomeLeaderboard();

      sinon.assert.calledOnce(getAllTeamsStub);
      sinon.assert.calledOnce(getMatchesStub);   
      sinon.assert.calledWith(getMatchesStub, false); 
    });
  });

});
