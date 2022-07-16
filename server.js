const express = require("express");
const cors = require("cors");
const userRouter = require("./Routes/users.routes");
const dotenv = require("dotenv").config({path:".env"});

const port = process.env.PORT || '5000';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);

app.listen(port,()=>{
    console.log(`App runs on ${port}`);
})

