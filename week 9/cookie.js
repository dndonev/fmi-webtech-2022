const express = require('express'); // get express function
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)
app.use(cookieParser()); // middleware to parse json request body (req.body !== undefined)

const users = [];

app.post('/user', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
        username,
        hashedPassword
    };

    users.push(user);
    res.status(200).send()
});

app.post('/private', (req, res) => {
    const { sessionId } = req.cookies;

    // sessionId == (user.sessionId) // from users

});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }

    const user = users.find(x => x.username === username);
    const sessionId = uuidv4();

    // authenticate
    if (bcrypt.compareSync(password, user.hashedPassword)) {
        // authenticated

        res.setHeader('Set-Cookie', sessionId);
        user.sessionId = sessionId;
        return res.send();
    }

    // unauthenticated
    res.status(401).send();
});

app.listen(3000);