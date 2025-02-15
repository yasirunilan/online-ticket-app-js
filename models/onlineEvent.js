import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const OnlineEvent = sequelize.define(
  "OnlineEvent",
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
    tableName: "online_events",
    hooks: {
      beforeCreate: (models) => {
        models.availableTickets = models.totalTickets;
      },
    }
  }
);

export default OnlineEvent;
