import IMatches from '../Interfaces/IMatches';
import SequelizeMatches from '../database/models/matches';
import SequelizeTeam from '../database/models/team';

class MatchService {
  private matchModel = SequelizeMatches;

  public async getAllMatches(): Promise<IMatches[]> {
    const matches = await this.matchModel.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches;
  }

  public async getMatches(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this.matchModel.findAll({
      where: { inProgress },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches;
  }
}

export default new MatchService();
