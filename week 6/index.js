const express = require('express'); // get express function
const { join } = require('path'); // to join paths according to your OS (normalize)

const app = express(); // create application from express
const port = 3000;
const cwd = process.cwd(); // cwd === current working directory

const index = join(cwd, 'public', 'index.html'); // path to index.html

app.use(express.json()); // middleware to parse json request body (req.body !== undefined)
app.use(express.static('public')) // serve index.html, index.js (static files)

app.get('/api', (req, res) => { // endpoint
    
    res.sendFile(index)
});

app.post('/api/customers', (req, res) => {
    const customers = [{id: 1, name: 'Dobrin'}, {id: 5, name: 'Peter'}];

    res.json(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const id = +req.params.id; // === Number(req.params.id)

    if (!id) {
        return res
            .status(400)
            .json({ error: "Invalid parameter" }); // 400 - Bad request
    }

    const customers = [{id: 1, name: 'Dobrin'}, {id: 5, name: 'Peter'}];
    const customer = customers.find(c => c.id === id);
    res.json(customer);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
