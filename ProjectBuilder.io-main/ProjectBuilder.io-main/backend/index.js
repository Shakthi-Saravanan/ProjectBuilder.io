import express from 'express'
import cors from 'cors'
import connection from './Db.js'
import UserRouter from './Routes/User.js'
import Configrouter from './Routes/Db_config.js'
import worksRouter from './Routes/Works.js'

const app = express()


app.use(cors())
app.use(express.json())
app.use('/user', UserRouter)
app.use('/config', Configrouter)
app.use('/works', worksRouter)

app.get('/', (req, res)=>{
    connection.query('desc userdetails', (err, result)=>{
        if (err){
            return res.status(401).json({
                "msg":"Error in querying"
            })
        }
        res.status(200).send(result)
    })
})

app.listen(5555)