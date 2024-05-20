const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
