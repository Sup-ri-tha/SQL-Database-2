require('dotenv').config();
const express = require('express');
const db = require('./SQL'); 

const app = express();
const PORT = process.env.PORT || 3000;


db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.message);
       
    } else {
        console.log('Connected to MySQL database');

      
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});

app.get('/', (req, res) => {
    res.send('Express server is running');
});
