//create web server
const express = require('express');
const app = express();

//create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//create a route
app.get('/api/comments', (req, res) => {
    res.send([1,2,3]);
});

//create a route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));