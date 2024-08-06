import ITeam from '../Interfaces/ITeam';
import SequelizeTeam from '../database/models/team';

export default class TeamService {
  private teamModel = SequelizeTeam;

  public async getAllTeams(): Promise<ITeam[]> {
    const allTeams: ITeam[] = await this.teamModel.findAll() as unknown as ITeam[];
    return allTeams;
  }
}
