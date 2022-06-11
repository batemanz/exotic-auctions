const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bid extends Model {}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car',
        key: 'id',
      },
    },
    bidder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bidder',
        key: 'id',
      },
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    bid: {
      //data type to be long number value
      type: DataTypes.BIGINT.UNSIGNED,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bid',
  }
);

module.exports = Bid;
