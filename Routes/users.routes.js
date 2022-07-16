const controller = require("../Controllers/users.controllers");
const userRouter = require("express").Router();

userRouter.post('/register',controller.CreateUser);

module.exports=userRouter;