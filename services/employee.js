import empModel from "../models/Employee.js";

const saveEmp = async (data) => {
  const emp = await empModel.create({
    name: data.name,
    empId: data.empId,
    location: data.location,
    company: data.company,
  });

  return emp;
};

const getEmpById = async (userId) => {
  return await empModel.findByPk(userId);
};

const deleteEmpById = async (userId) => {
  return await empModel.destroy({
    where: {
      id: userId,
    },
  });
};

const getAllEmp = async () => {
  return await empModel.findAll();
};

const getEmpByName = async (userName) => {
  return await empModel.findOne({
    where: {
      name: userName,
    },
  });
};

export { saveEmp, getEmpById, getEmpByName, deleteEmpById, getAllEmp };
