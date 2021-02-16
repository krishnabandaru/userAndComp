import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

sequelize
  .sync({ force: false })
  .then(() => console.log("All models were synchronized successfully."))
  .catch((err) => {
    console.log(err);
  });

export default sequelize;
