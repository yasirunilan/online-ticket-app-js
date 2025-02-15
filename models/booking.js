import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";
import { BookingStatus } from "../utils/enums.js";
const Booking = sequelize.define(
  "Booking",
  {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: BookingStatus.CONFIRMED,
    },
  },
  { tableName: "bookings" }
);

export default Booking;
