const express = require('express');
const mysql2 = require('mysql2'); 
const app = express();
const conexao =  mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'anaflor_banco',
})

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log("ok");
})

app.get("/", (req,res)=>{
    const sqlInsert = "INSERT INTO produtos (nome_produto) VALUES ('tenis');"
    db.query(sqlInsert, (err,result) => {
        res.send("hello dsds ")
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
})