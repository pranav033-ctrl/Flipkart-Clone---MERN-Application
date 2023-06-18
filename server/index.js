import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import Default from './database/Default.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

app.listen(PORT,()=> {
    console.log("Server is running on port "+PORT);
})

connectDB();
Default();

app.get('/',(req,res)=>{
    res.send("This is Pranav Patil King !!!");
})