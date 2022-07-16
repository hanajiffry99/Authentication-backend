const pool = require("../Database/db");

const CreateUser = async(req,res) =>{
    try {
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
     
      const sqlQuery = "INSERT INTO users (firstname,lastname,email,password,confirmPassword) VALUES (?,?,?,?,?)";
      const row = pool.query(sqlQuery, [firstname,lastname,email,password,confirmPassword]);
  
      console.log(row);
      res.status(200).send({ message: "Payment done" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  module.exports = {CreateUser};