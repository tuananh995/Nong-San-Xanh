let pg = require('pg')
let client = new pg.client(
    {
        user: 'postgres',
        password: 'postgres',
        database: 'nsx',
        host: 'localhost',
        post: 5432
    }
)
client.connect()


const express = require('express')
const app = express()
const port = 3000

app.get('/', (reg, res) => {
    client.query('select * from customers', function(err, result){
        res.send(JSON.stringify(result.rows))
        client.end()
    })
})
app.listen(port, () => console.log('example app listening on port ${port}!'))