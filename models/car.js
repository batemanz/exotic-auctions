const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    vin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    miles: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fuel_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transmission: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    engine: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    starting_bid: {
      type: DataTypes.FLOAT,
    },
    bid_increment: {
        type: DataTypes.FLOAT,
    },
    current_bid: {
        type: DataTypes.FLOAT,
        references: {
          model: 'bid',
          key: 'id',
        },
    },
    seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bidder',
            key: 'id',
          },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car',
  }
);

module.exports = Car;