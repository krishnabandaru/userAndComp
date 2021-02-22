import {
  getEmpById,
  saveEmp,
  deleteEmpById,
  getAllEmp,
  getEmpByName,
} from "../services/employee.js";

const saveEmployee = async (req, res) => {
  const user = await saveEmp(req.body);
  if (user != null) {
    return res.status(201).send(user);
  } else return res.sendStatus(400);
};

const getEmployee = async (req, res) => {
  const user = await getEmpById(req.query.userId);
  if (user != null) {
    return res.status(200).send(user);
  } else return res.sendStatus(204);
};

const getEmployeeName = async (req, res) => {
  const user = await getEmpByName(req.query.name);
  if (user != null) {
    return res.status(200).send(user);
  } else return res.sendStatus(204);
};

const deleteEmployee = (req, res) => {
  deleteEmpById(req.query.userId);
  return res.sendStatus(204);
};

const getAllEmployees = async (req, res) => {
  const employees = await getAllEmp();
  if (employees.length > 0) {
    return res.status(200).send(employees);
  } else return res.sendStatus(204);
};

export {
  saveEmployee,
  getEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeName,
};
