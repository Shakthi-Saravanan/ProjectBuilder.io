import express from 'express'
import connection from '../Db.js'

const worksRouter = express.Router()

worksRouter.post('/', (req, res)=>{
    if (!req.body.uid || !req.body.pno || !req.body.Deadline){
        return res.status(500).json({
            msg:"error: missing fields"
        })
    }

    const newWork = {
        'uid':req.body.uid,
        'pno':req.body.pno,
        'Deadline':req.body.Deadline
    }
    // STR_TO_DATE("August 10 2017", "%M %d %Y")
    console.log(newWork)
    const query  = `insert into projectbuilder.works values (${req.body.uid}, ${req.body.pno},${req.body.Deadline})`
    console.log(query)
    connection.execute(query    , (err)=>{
        if (err) return res.status(500).send(err)
        return res.status(201).send('data added')
    })
})

export default worksRouter