import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import User from './Assets/Routes/Router.js'
import DBconfig from './Config/DBConfig.js'
import dotenv from "dotenv"


DBconfig()
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

dotenv.config()

app.use('/api',User)
// app.use('/api',Admin)

app.get('/',(req,res)=>{
    res.send("Working")
})


const PORT = process.env.PORT || 2022
app.listen( 2022,() =>{
    console.log(`server is running in port ${PORT}`);
})