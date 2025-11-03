require('dotenv').config();

console.log("Hello World");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://sabareeshrao_db_user:HkSX5fCWToXuDu0o@cluster0.tynounc.mongodb.net/?appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

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

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
