import express from "express";

import dotenv from "dotenv";
import empRouter from "./routes/employee.js";

const app = express();
app.use(express.json());

dotenv.config();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  return res.status(200).send("heyy man");
});

app.use("/emp", empRouter);

app.listen(port, () => {
  console.log(`Server started at port no ${port}`);
});
