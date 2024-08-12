import TeamService from './TeamService';
import MatchService from './matchService';
import ILeaderbord from '../Interfaces/ILeaderbord';

const INITIAL_LEADERBOARD = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
};

class LeaderboardService {
  public teamService = new TeamService();
  private calculateEfficiency = (totalPoints: number, totalGames: number): number => (totalGames > 0
    ? parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2))
    : 0);

  private calculateStatsLeaderboard = (leaderboard: ILeaderbord[]) => {
    const newLeaderboard = leaderboard.map((board: ILeaderbord) => {
      const totalPoints = board.totalVictories * 3 + board.totalDraws;
      const goalsBalance = board.goalsFavor - board.goalsOwn;
      const efficiency = this.calculateEfficiency(totalPoints, board.totalGames);
      // console.log('totalPoints:', totalPoints);
      // console.log('totalGames:', board.totalGames);
      console.log('efficiency:', efficiency);
      return {
        ...board,
        totalPoints,
        goalsBalance,
        efficiency: `${efficiency.toFixed(2)}`,
      };
    });
    return newLeaderboard;
  };

  private sortLeaderboard =
  (leaderboard: ILeaderbord[] | undefined) => leaderboard?.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    if (b.totalVictories !== a.totalVictories) {
      return b.totalVictories - a.totalVictories;
    }
    if (b.goalsBalance !== a.goalsBalance) {
      return b.goalsBalance - a.goalsBalance;
    }
    if (b.goalsFavor !== a.goalsFavor) {
      return b.goalsFavor - a.goalsFavor;
    }
    return b.goalsOwn - a.goalsOwn;
  });

  public getLeaderboard = async () => {
    const teams = await this.teamService.getAllTeams();
    const matches = await MatchService.getMatches(false);
    const leaderboard = teams.map((team) => {
      const result = matches.reduce((acc, match) => {
        if (match.homeTeamId === team.id) {
          acc.name = team.teamName;
          acc.totalGames += 1;
          acc.totalVictories += match.homeTeamGoals > match.awayTeamGoals ? 1 : 0;
          acc.totalDraws += match.homeTeamGoals === match.awayTeamGoals ? 1 : 0;
          acc.totalLosses += match.homeTeamGoals < match.awayTeamGoals ? 1 : 0;
          acc.goalsFavor += match.homeTeamGoals;
          acc.goalsOwn += match.awayTeamGoals;
        }
        return acc;
      }, { ...INITIAL_LEADERBOARD });
      return result;
    });
    return this.sortLeaderboard(this.calculateStatsLeaderboard(leaderboard));
  };
}

export default new LeaderboardService();
