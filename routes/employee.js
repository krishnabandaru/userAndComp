import express from "express";
import { getUser, saveUser_c } from "../controller/employee.js";
import empModel from "../models/Employee.js";

const empRouter = express.Router();

empRouter.get("/", (req, res) => {
  getUser(req, res);
});

empRouter.post("/", (req, res) => {
  saveUser_c(req, res);
});

export default empRouter;
