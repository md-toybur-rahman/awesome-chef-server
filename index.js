const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const chef = require('./data/chef.json');
const service = require('./data/services.json')

const cors = require('cors');

app.use(cors());

// https://awesome-chef-server-md-toybur-rahman.vercel.app/

app.get('/', (req, res) => {
    res.send("Awesome Chef is Running");
});


app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id == id);
    res.send(selectedChef);
})

app.get('/service', (req, res) => {
    res.send(service);
})

app.listen(port, () => {
    console.log(`port no is: ${port}`)
})