const express = require('express');

const app = express();

require('dotenv').config();
console.log(process.env.DATABASE);
const PORT = process.env.PORT  || 4000;

app.use(express.json());

const todoRoutes = require('./routes/todo')

app.use('/api/v1/', todoRoutes);

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome</h1>`);
})

// app.post('/')


app.listen(PORT, ()=>{
    console.log("App is running successfully")
})

const dbConnect = require('./config/database')

dbConnect();