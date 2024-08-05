import { QueryInterface, Model, DataTypes } from 'sequelize';
'use strict';
import Query = require('mysql2/typings/mysql/lib/protocol/sequences/Query');
import ITeam from '../../Interfaces/ITeam';

module.exports = {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ITeam>>('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      teamName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'team_name'
      },
    });
  },
  down(queryInterface: QueryInterface) {
  return queryInterface.dropTable('teams');
  }
};