"use strict";
import { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      hooks: {
        beforeCreate: (user) => {
          user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10)
          );
        },
        beforeUpdate: (user) => {
          user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10)
          );
        },
      },
    }
  );
  return User;
};
