const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', // Allow requests from this origin
}));

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.listen(4000);
