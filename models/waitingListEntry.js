import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const WaitingListEntry = sequelize.define(
  "WaitingListEntry",
  {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "waiting_list_entries",
  }
);

export default WaitingListEntry;
