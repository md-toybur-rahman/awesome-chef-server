const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Awesome Chef is Running");
});

app.listen(port, () => {
    console.log(`port no is: ${port}`)
})