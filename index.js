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
    let result
    connection.query(query, (err, results, fields) => {
        result = results;
        console.log(err)
        console.log(results)
        console.log(fields)

        if(err == null){
            res.send('OK')
        }else{
            res.send('ERROR')
        }
    })
})

// endpoint que lista todas as culturas (READ)
app.get('/lista', (req, res) => {

})

// endpoint que atualiza o nome e ano de uma cultura baseado no seu codigo (UPDATE)
app.get('/atualizar/:codigo/:nome/:ano', (req, res) => {

})

// endpoint que deleta uma cultura baseado no seu codigo
app.get('/deletar/:codigo', (req, res) => {

})

// endpoint para pesquisar uma cultura pelo seu codigo
app.get('/codigo/:codigo', (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`)
})