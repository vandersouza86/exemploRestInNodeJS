var express = require('express');
var app = express();

//definir a route principal
app.get('/', function(req,res){
	res.send('RESTful API - Pplware');
});


//Lista de Utilizadores
var estados = [{id: 1, cidade: 'São Paulo', estado: 'São Paulo'},
	       {id: 2, cidade: 'Erechim', estado: 'Minas Gerais'},
	       {id: 3, cidade: 'Fortaleza', estado: 'Ceará'},
	       {id: 4, cidade: 'Gramado', estado: 'Rio Grande do Sul'},
	       {id: 5, cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro'},
];

//Definir um endpoit da API
app.get('/api/listaEstados', function(req,res,next){
	res.send(estados);
})

// Aplicação disponível em http://127.0.0.1:8888/
app.listen(8888);
