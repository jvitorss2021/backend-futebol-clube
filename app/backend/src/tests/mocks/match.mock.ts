export const matchesMock = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: { teamName: 'Team A' },
    awayTeam: { teamName: 'Team B' },
  },
  {
    id: 2,
    homeTeamId: 3,
    homeTeamGoals: 1,
    awayTeamId: 4,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: { teamName: 'Team C' },
    awayTeam: { teamName: 'Team D' },
  },

];
export const inProgressMatchesMock = matchesMock.filter(match => match.inProgress);
