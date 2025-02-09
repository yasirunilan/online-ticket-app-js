"use strict";
import { Model } from "sequelize";
import { BookingStatus } from "../utils/enums.js";
export default (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
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
      status: {
        type: BookingStatus,
        allowNull: false,
        defaultValue: BookingStatus.CONFIRMED,
      },
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: "bookings",
    }
  );
  return Booking;
};
