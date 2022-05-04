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

app.post('/register', (req, res) => {
	const { user } = req.body;
	if (!user) {
		return res.sendStatus(400);
	}
	req.session.user = user;
	res.status(200).send()
})

app.get('/private', (req, res) => {

	if (!req.session.user.username === 'dobrin123' && !req.session.user.password === 'not123') {
		return res.sendStatus(401);
	}
	res.send('private')
})

app.get('/logout', (req, res) => {
	req.session.destroy();
	res.send('logged out')
});

app.listen(3000);