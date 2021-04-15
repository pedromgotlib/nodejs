let http = require('http');
let url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});

    let q = url.parse(req.url, true).query;
    let opcao = q.opcao;
    if(opcao=="soma"){
        let txt = parseInt(q.numA) + parseInt(q.numB);
        let resposta = "Resultado da soma: " + txt;
    
        res.end(resposta);
    }else if(opcao=="divisao"){
        let txt = parseInt(q.numA) / parseInt(q.numB);
        let resposta = "Resultado da divisão: " + txt;
    
        res.end(resposta);
    }else if(opcao=="subtracao"){
        let txt = parseInt(q.numA) - parseInt(q.numB);
        let resposta = "Resultado da subtração: " + txt;
    
        res.end(resposta);
    }else if(opcao=="multiplicacao"){
        let txt = parseInt(q.numA) * parseInt(q.numB);
        let resposta = "Resultado da multiplicação: " + txt;
    
        res.end(resposta);
    }else{
        let resposta = "Não foi possível reconhecer a operação."

        res.end(resposta);
    }

}).listen(3000);