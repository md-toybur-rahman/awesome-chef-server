const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const chef = require('./data/chef.json');
const service = require('./data/services.json')

const cors = require('cors');

app.use(cors());

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

app.get('/:country', (req, res) => {
    const country = req.params.country;
    const selectedCountry = chef.filter(a => a.country.toLowerCase() == country);
    res.send(selectedCountry);
})

app.get('/service', (req, res) => {
    res.send(service);
})

app.listen(port, () => {
    console.log(`port no is: ${port}`)
})