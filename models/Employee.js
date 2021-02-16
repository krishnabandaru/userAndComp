import DataType from "sequelize";
import sequelize from "../config/db.pg.config.js";

const empModel = sequelize.define(
  "Employee",
  {
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    empId: {
      type: DataType.STRING,
      allowNull: false,
    },
    location: {
      type: DataType.STRING,
      allowNull: false,
    },
    company: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default empModel;
