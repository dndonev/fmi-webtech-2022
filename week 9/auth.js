const express = require('express'); // get express function
const bcrypt = require('bcrypt');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)

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

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }

    const user = users.find(x => x.username === username);

    if (bcrypt.compareSync(password, user.hashedPassword)) {
        return user;
    }

    res.status(401).send();
});

app.listen(3000);