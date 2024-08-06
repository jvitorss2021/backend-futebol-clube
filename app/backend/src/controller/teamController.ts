import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

class TeamController {
  private teamService = new TeamService();

  public async getAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this.teamService.getAllTeams();
    res.status(200).json(serviceResponse);
  }

  public async getTeamById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const serviceResponse = await this.teamService.getTeamById(id);
    res.status(200).json(serviceResponse);
  }
}

export default new TeamController();
