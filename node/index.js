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



const sql = `insert into people(name) values ?`
const peoples = [['Marcelo'], ['Quinalha'], ['MAQ']]
connection.query(sql, [peoples])

//const sqlSelect = `SELECT * FROM people ORDER BY 1 ASC`
//connection.query(sqlSelect)

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks</h1>')
})

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})





