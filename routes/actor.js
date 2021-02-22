import express from "express";
import { deleteActor_, saveActor_ } from "../controller/actor.js";
//import { authenticateActor } from "../middleware/verify.actor.js";

const actorRouter = express.Router();

actorRouter.post("/", (req, res) => {
  saveActor_(req, res);
});

actorRouter.delete("/", (req, res) => {
  deleteActor_(req, res);
});

actorRouter.post("/login", (req, res) => {
  authenticateActor(req, res);
});

export default actorRouter;
