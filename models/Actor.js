import DataType from "sequelize";
import sequelize from "../config/db.pg.config.js";

const actorModel = sequelize.define(
  "Actor",
  {
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: "Email address already used!",
      },
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default actorModel;
