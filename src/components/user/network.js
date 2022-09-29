import { Router } from "express";
import * as Controller from "./controller";

const userTRouter = Router();

userTRouter.get("/", Controller.findAll);
userTRouter.post("/", Controller.store);

export default userTRouter;