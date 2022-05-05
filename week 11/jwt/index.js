const express = require('express'); // get express function

const jwt = require('jsonwebtoken');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)

const secret = 'mysecret';

app.get('/private', verifyToken, (req, res) => {
    

    if (!user) {
        return res.status(403).send();
    }

    res.json(user);
});

app.get('/private-stuff', verifyToken, (req, res) => {

});
app.get('/private-stuff', verifyToken, (req, res) => {

});

app.post('/authorize', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }
    
    // authorize
    const token = jwt.sign({ username, role: 'Admin' }, secret);

    res.json(token);
});

function verifyToken(req, res, next) {
    const tokenBearer = req.headers.authorization; // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....";

    if (!token && !token.length) {
        return res.status(400).send();
    }

    const token = tokenBearer.split(' ').pop();
    
    const user = jwt.verify(token, secret);

    if (!user) {
        return res.status(403).send();
    }
    
    next();
}

app.listen(3000);