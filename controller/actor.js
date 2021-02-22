import { deleteActor, saveActor } from "../services/actor.js";

const saveActor_ = async (req, res) => {
  const user = await saveActor(req.body);
  if (user != null) {
    return res.status(201).send(user);
  } else return res.sendStatus(400);
};

const deleteActor_ = (req, res) => {
  deleteActor(req.query.email);
  return res.sendStatus(204);
};

export { deleteActor_, saveActor_ };
