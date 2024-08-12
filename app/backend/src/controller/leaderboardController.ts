import { Response, Request } from 'express';
import LeaderboardService from '../service/leaderboardService';

const leaderboardHomeController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const leaderboard = await LeaderboardService.getHomeLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const leaderboardAwayController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const leaderboard = await LeaderboardService.getAwayLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { leaderboardHomeController, leaderboardAwayController };
