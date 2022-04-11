const express = require('express') 
const uuid = require('uuid')

const app = express()
const port = 3000;
app.use(express.json());

let users = []

app.get('/api/users', (req, res) => {
    res.json(users)
});

app.get('/api/users/:id', (req, res) => {
    let id = req.params.id
    console.log(id)

    if(!id){
        return res
        .status(400)
        .json({error: "Invalid parameter"});
    }

    const user = users.find(user => user.id === id)
    res.json(user)
});

app.post('/api/users/create', (req, res) => {
    const userName = req.body.name;
    console.log(userName)
    console.log(req.body)
    
    if(!userName){
        return res
        .status(400)
        .json({error: "Invalid parameter"});
    }

    let newId = uuid.v5()

    const newUser = {name: userName, id: newId};
    users.push(newUser);


    return res
        .json(newUser);
})

app.listen(3000);
