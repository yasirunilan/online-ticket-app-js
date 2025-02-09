"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      totalTickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      availableTickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
      hooks: {
        beforeCreate: (models) => {
          models.availableTickets = models.totalTickets;
        },
      },
    }
  );
  return Event;
};
