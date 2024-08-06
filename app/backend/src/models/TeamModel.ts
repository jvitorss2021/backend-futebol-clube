// import SequelizeTeam from '../database/models/team';
// import ITeam from '../Interfaces/ITeam';
// import { ITeamModel } from '../Interfaces/Teams/ITeamModel';

// export default class TeamModel implements ITeamModel {
//   private model = SequelizeTeam;

//   async findAll(): Promise<ITeam[]> {
//     const teams = await this.model.findAll();
//     return teams.map(({ id, name }) => ({ id, teamName: name }));
//   }
//   // async findbyid(id: number): Promise<ITeam | null> {
//   //   const teamsById = await this.model.findByPk(id);
//   //   if (teamsById == null) return null;
//   //   const
//   // }
// }
