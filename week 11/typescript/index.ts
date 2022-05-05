import express, { NextFunction } from 'express'; // get express function

import jwt from 'jsonwebtoken';

import { getPerson } from './index2'; // const { getPerson } = require('./index2');

const app = express(); // create application from express
app.use(express.json()); // middleware to parse json request body (req.body !== undefined)

const secret = 'mysecret';

app.get('/private', verifyToken, (req: express.Request, res: express.Response) => {
    const user = {};

    if (!user) {
        return res.status(403).send();
    }

    res.json(user);
});

app.get('/private-stuff', verifyToken, (req, res) => {});
app.post('/private-stuff', verifyToken, (req, res) => {});

app.post('/authorize', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).send();
    }
    
    // authorize
    const token = jwt.sign({ username, role: 'Admin' }, secret);

    res.json(token);
});

function verifyToken(req: express.Request, res: express.Response, next: NextFunction) {
    const tokenBearer = req.headers.authorization; // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....";

    if (!tokenBearer && !tokenBearer?.length) {
        return res.status(400).send();
    }

    const token = tokenBearer?.split(' ').pop();
    
    if (!token) {
        return res.status(400).send(); 
    }

    const user = jwt.verify(token, secret);

    if (!user) {
        return res.status(403).send();
    }
    
    next();
}

app.listen(3000);