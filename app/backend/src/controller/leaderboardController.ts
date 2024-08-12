import { Response, Request } from 'express';
import LeaderboardService from '../service/leaderboardService';
import InternalServerError from '../middlewares/serverMiddleware';

const errorFetching = 'Error fetching leaderboard:';

const leaderboardHomeController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const leaderboard = await LeaderboardService.getHomeLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error({ message: errorFetching }, error);
    return res.status(500).json({ message: InternalServerError });
  }
};

const leaderboardAwayController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const leaderboard = await LeaderboardService.getAwayLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error({ message: errorFetching }, error);
    return res.status(500).json({ message: InternalServerError });
  }
};

const fullLeaderboardController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const leaderboard = await LeaderboardService.getFullLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error({ message: errorFetching }, error);
    return res.status(500).json({ message: InternalServerError });
  }
};

export default { leaderboardHomeController, leaderboardAwayController, fullLeaderboardController };
