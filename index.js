const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(' Hello my over smart pant!!')
})
const users = [
    { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "01919999988" },
    { id: 2, name: "Shabnoor", email: "shabnoor@gmail.com", phone: "01919999988" },
    { id: 3, name: "Sucharita", email: "sucharita@gmail.com", phone: "01919999988" },
    { id: 4, name: "Suchanda", email: "suchanda@gmail.com", phone: "01919999988" },
    { id: 5, name: "Sabila", email: "sabila@gmail.com", phone: "01919999988" },
    { id: 6, name: "Shrabonti", email: "shrabonti@gmail.com", phone: "01919999988" },
    { id: 7, name: "Sharmili", email: "sharmili@gmail.com", phone: "01919999988" },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening', port);
})