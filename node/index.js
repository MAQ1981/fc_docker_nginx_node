const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'fc_docker_node'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('FC_DOCKER_NODE')`
connection.query(sql)

//const sql = `SELECT * FROM PEOPLE ORDER BY 1 ASC`
//connection.query(sql)

connection.end()


app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

