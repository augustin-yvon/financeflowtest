const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financeflow',
    port: 3308,
})


app.get('/user', (req, res) => {
    const sql = "SELECT * from user"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})

app.post('/updatesolde', (req, res) => {
    const { solde } = req.body;
    const sql = `UPDATE solde SET solde = ${solde} WHERE id = 1`;

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json({ message: 'Solde mis à jour avec succès' });
        }
    });
});

app.get('/solde', (req, res) => {
    const sql = "SELECT * from solde WHERE `id` = 1"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})