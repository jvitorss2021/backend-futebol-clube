import { Model, DataTypes,
  InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import db from '.';
import SequelizeTeam from './team';

class SequelizeMatches extends Model<InferAttributes<SequelizeMatches>,
InferCreationAttributes<SequelizeMatches>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

SequelizeMatches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'Matches',
  tableName: 'matches',
  timestamps: false,
});
SequelizeMatches.belongsTo(SequelizeTeam, { as: 'homeTeam', foreignKey: 'homeTeamId' });
SequelizeMatches.belongsTo(SequelizeTeam, { as: 'awayTeam', foreignKey: 'awayTeamId' });

export default SequelizeMatches;
