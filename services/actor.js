import actorModel from "../models/Actor.js";

const saveActor = async (data) => {
  const emp = await actorModel.create({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  return emp;
};

const deleteActor = async (email_) => {
  return await actorModel.destroy({
    where: {
      email: email_,
    },
  });
};

const getActorByEmail = async (findTerm) => {
  if (findTerm == undefined) return;
  return await actorModel.findOne({
    where: {
      email: findTerm,
    },
  });
};

export { saveActor, deleteActor, getActorByEmail };
