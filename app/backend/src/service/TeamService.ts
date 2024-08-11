import ITeam from '../Interfaces/ITeam';
import SequelizeTeam from '../database/models/team';

export default class TeamService {
  public teamModel = SequelizeTeam;

  public async getAllTeams(): Promise<ITeam[]> {
    const allTeams: ITeam[] = await this.teamModel.findAll() as unknown as ITeam[];
    return allTeams;
  }

  public async getTeamById(id: number): Promise<ITeam | null> {
    const teamById = await this.teamModel.findByPk(id);
    return teamById as unknown as ITeam;
  }
}
