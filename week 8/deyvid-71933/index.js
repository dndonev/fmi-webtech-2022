const express = require('express') 
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

let users = [{id:'71933', name:'Deyvid'}] // DB with users. WoW!

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

    let newId = uuidv4();
    const newUser = {name: userName, id: newId};

    users.push(newUser);


    return res
        .json(newUser);
})

app.delete('/api/users/:id', (req, res) => {
    let id = req.params.id
    
    if(!id){
        return res
        .status(400)
        .json({error: "Invalid parameter"});
    }

    users = users.filter(user => user.id !== id)

    return res
        .status(204).send()
})


app.patch('/api/users/:id', (req, res) => {
    let id = req.params.id
    console.log(id)

    if(!id){
        return res
        .status(400)
        .json({error: "Invalid parameter"});
    }

    const user = users.find(user => user.id === id)
    if(!user){
        return res
        .status(404)
        .json({error: "User not found!"});
    }

    let name = req.body.name
    if(!name){
        return res
        .status(400)
        .json({error: "Invalid Parameter"});
    }

    user.name = name

    return res
        .status(202).send()
})

app.listen(3000);
