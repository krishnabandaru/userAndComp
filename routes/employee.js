import express from "express";
import {
  deleteEmployee,
  getAllEmployees,
  getEmployeeName,
  getEmployee,
  saveEmployee,
} from "../controller/employee.js";
//import { authorizeEmp } from "../middleware/verify.actor.js";

const empRouter = express.Router();

empRouter.get("/", (req, res) => {
  getEmployee(req, res);
});

empRouter.get("/name", (req, res) => {
  getEmployeeName(req, res);
});

empRouter.post("/", (req, res) => {
  saveEmployee(req, res);
});

empRouter.delete("/", (req, res) => {
  deleteEmployee(req, res);
});

empRouter.get("/all", (req, res) => {
  getAllEmployees(req, res);
});

export default empRouter;
