import { Router } from "express";
import * as Controller from "./controller";

/*const userRouter = Router();*/

const messageRouter = Router();

messageRouter.get("/:id/:sender_id", Controller.findAll);
messageRouter.post("/",Controller.store);


export default messageRouter;