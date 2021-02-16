import empModel from "../models/Employee.js";

const saveUser = async (data) => {
  const emp = await empModel.create({
    name: data.name,
    empId: data.empId,
    location: data.location,
    company: data.company,
  });

  return emp;
};

const getUserById = async (userId) => {
  return await empModel.findByPk(userId);
};

export { saveUser, getUserById };
