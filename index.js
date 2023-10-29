// EXPRESS API SETUP
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080


// MYSQL DATABASE CONNECTION
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'farm'
})


app.get('/ping', (req, res) => {
    res.send('pong')
})


// endpoint para criar uma nova cultura (CREATE)
app.get('/criar/:nome/:ano', (req, res) => {

    let query = `INSERT INTO cultura(nome_cultura, ano_safra) VALUES("${req.params.nome}", ${req.params.ano});`

    connection.query(query, (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)

        if(err == null){
            res.json(results)
        }else{
            res.send('ERROR')
        }
    })
})

// endpoint que lista todas as culturas (READ)
app.get('/lista', (req, res) => {

    let query = `SELECT * FROM cultura;`

    connection.query(query, (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)

        if(err == null){
            res.json(results)
        }else{
            res.send('ERROR')
        }
    })
})

// endpoint que atualiza o nome e ano de uma cultura baseado no seu codigo (UPDATE)
app.get('/atualizar/:codigo/:nome/:ano', (req, res) => {

    let query = `UPDATE cultura SET nome_cultura = "${req.params.nome}", ano_safra = "${req.params.ano}" WHERE codigo_cultura = ${req.params.codigo};`

    connection.query(query, (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)

        if(err == null){
            res.json(results)
        }else{
            res.send('ERROR')
        }
    })
})

// endpoint que deleta uma cultura baseado no seu codigo
app.get('/deletar/:codigo', (req, res) => {

    let query = `DELETE FROM cultura WHERE codigo_cultura = ${req.params.codigo};`

    connection.query(query, (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)

        if(err == null){
            res.json(results)
        }else{
            res.send('ERROR')
        }
    })
})

// endpoint para pesquisar uma cultura pelo seu codigo
app.get('/codigo/:codigo', (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`)
})