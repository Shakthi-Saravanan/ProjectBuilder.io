import express, { json } from "express";
import connection from "../Db.js";

const UserRouter = express.Router();

UserRouter.get("/:uid", (req, res) => {
  const uid = req.params.uid;
  const query = `select * from projectbuilder.user where uid = ${uid}`;
  res.status(200);
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(404).json({
        msg: "Error in fetching data",
      });
    }
    if (result.length === 0) {
      return res.status(401).json({
        msg: "No data is present",
      });
    }
    res.status(200).send(result);
  });
});

let query;
UserRouter.post("/", (req, res) => {
  if (!req.body.Name || !req.body.Email || !req.body.Pno || !req.body.Passwd) {
    return res.status(400).json({
      msg: "Missing req fields: Name, Email, Phone number, Password",
    });
  }
  connection.query("select * from projectbuilder.user;", (err, resu) => {
    if (err) {
      return -1;
    }
    const id = resu.length +1
    query = `insert into projectbuilder.user value(${id}, \
        '${req.body.Name}',${req.body.Pno}, '${req.body.Email}',  '${req.body.Passwd}')`;
    console.log(query)
    connection.execute(query, (err)=>{
        if(err){
            console.log(err)
        }
        res.status(201).send('data added to db')
    })
  });
});

UserRouter.get('/', (req, res)=>{
    connection.query('select * from projectbuilder.user', (err, result)=>{
        if (err){
            return -1
        }
        return res.status(200).json(result)
    })
})

export default UserRouter;
