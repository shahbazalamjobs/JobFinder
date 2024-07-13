
// server.js

import express from 'express';
import pool from './db.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API working');
});

// Route to get all people
app.get('/people', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM people');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching people');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});