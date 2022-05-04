const express = require('express'); // get express function
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)
app.use(cookieParser()); // middleware to parse json request body (req.body !== undefined)

app.use(session({
	secret: 'my-secret'
}));

const users = [];

app.post('/login', (req, res) => {
    if (isValidUser) { // 
        req.session.isAuthenticated = true;
        res.send();
    }
});

app.post('/private', (req, res) => {
    const { isAuthenticated } =  req.session;

    if (isAuthenticated) {
        return res.status(401).send();
    }
});

app.listen(3000);