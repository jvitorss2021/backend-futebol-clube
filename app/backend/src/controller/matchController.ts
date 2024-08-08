import { Request, Response } from 'express';
import MatchService from '../service/matchService';

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
}
export default MatchController;
