const express = require('express');
require('dotenv').config();
const cors = require('cors');
const User = require('./models/User');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const app = express();

const bcryptSalt=bcrypt.genSaltSync(10);

app.use(express.json()); 
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', 
}));
 
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
   const {name,email,password} = req.body;
    const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    })


   res.json(userDoc);
}) 

app.listen(4000);

//OajmdHfEPi5IfDSV
//mongodb+srv://abdulrahumanfazal:OajmdHfEPi5IfDSV@cluster0.b1trfr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://abdulrahumanfazal:<password>@cluster0.b1trfr3.mongodb.net/