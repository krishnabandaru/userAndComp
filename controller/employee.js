import { getUserById, saveUser } from "../services/employee.js";

const saveUser_c = async (req, res) => {
  const user = await saveUser(req.body);

  if (user != null) {
    return res.status(201).send(user);
  } else return res.sendStatus(400);
};

const getUser = async (req, res) => {
  const user = await getUserById(req.query.userId);

  if (user != null) {
    return res.status(201).send(user);
  } else return res.sendStatus(204);
};

export { saveUser_c, getUser };
