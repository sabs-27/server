console.log("Hello World");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello Someone");
});

app.post('/api/products', (req, res) => {
    res.send(req.body);
    console.log(`Server running on PORT ${PORT}`);
});

