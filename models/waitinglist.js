"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class WaitingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaitingList.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "WaitingList",
      tableName: "waiting_list",
    }
  );
  return WaitingList;
};
