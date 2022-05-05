const express = require('express'); // get express function

const jwt = require('jsonwebtoken');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)

const secret = 'mysecret';

app.get('/private', (req, res) => {
    
    const token = req.headers.authorization;

    if (!token && !token.length) {
        return res.status(400).send();
    }

    const user = jwt.verify(token, secret);

    if (!user) {
        return res.status(403).send();
    }

    res.json(user);
});

app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }
    // authenticate
    const token = jwt.sign({ username }, secret);

    res.json(token);
});

app.listen(4000);