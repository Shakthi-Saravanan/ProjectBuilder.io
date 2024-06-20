import mysql2 from 'mysql2'

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Anis301004@"
})

connection.connect((err)=>{
    if (err){
        return console.log(err)
    }
    console.log('connected')
})

export default connection