const express = require("express")
require('dotenv').config();
const cors = require("cors")
const { connection } = require("./Db/db")
const errorHandler = require ("./Middleware/errorHandler.js")
const bookRoutes = require('./Routes/BookRoutes');

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', bookRoutes);
app.use(errorHandler)


const port = process.env.port || 3000

const startServer = async ()=>{
    try{
        await connection()
        app.listen(port,()=>{
            console.log(`Server running on port ${port}`);
        })

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
startServer()