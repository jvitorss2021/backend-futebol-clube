import { Request, Response } from 'express';
import MatchService from '../service/matchService';
import SequelizeMatches from '../database/models/matches';

class MatchController {
  static getAllMatches = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;
      let matches;

      if (inProgress !== undefined) {
        const inProgressBool = inProgress === 'true';
        matches = await MatchService.getMatches(inProgressBool);
      } else {
        matches = await MatchService.getAllMatches();
      }

      return res.status(200).json(matches);
    } catch (error) {
      console.error('Error fetching matches:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  static async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const match = await SequelizeMatches.findByPk(id);

      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }

      await match.update({ inProgress: false });

      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public static async updateMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    try {
      const match = await SequelizeMatches.findByPk(id);

      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }

      if (!match.inProgress) {
        return res.status(400).json({ message: 'Cannot update a finished match' });
      }

      await match.update({ homeTeamGoals, awayTeamGoals });

      return res.status(200).json({ message: 'Match updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
export default MatchController;
