var express = require('express');
var router = express.Router();

const clientes = [
  {
    id: 1,
    nome: 'UNESP Bauru',
    cpfcnpj: '10.435.371/0001-50',
    email: 'unesp@unesp.br',
  },
  {
    id: 2,
    nome: 'Universidade de São Paulo',
    cpfcnpj: '20.225.314/0001-20',
    email: 'usp@usp.br',
  },
  {
    id: 3,
    nome: 'UNAERP Universidade de Ribeirão Preto',
    cpfcnpj: '15.684.124/0001-12',
    email: 'unaerp@unaerp.br',
  },
  
];

const produtos = [
  {
    id: 1,
    referencia: 'SLB001',
    nome: 'Caixa Skinner',
    descricao: 'Caixa Skinner Ethernet',
    preco: 4800,
    garantia: '3 meses',
  },
  {
    id: 1,
    referencia: 'SLB002',
    nome: 'Caixa Esquiva',
    descricao: 'Caixa Esquiva Passiva',
    preco: 6000,
    garantia: '4 meses',
  },
];
const orcamentos = [
  {
    id: 1,
    cliente: 'USP',
    produto: 'Caixa Skinner',
    valor: 4800,
    itens: 1,
  },
  {
    id: 2,
    cliente: 'UNIP',
    produto: 'Caixa Skinner',
    valor: 5600,
    itens: 2,
  },
];

router.get('/clientes', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(clientes)
});

router.get('/produtos', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(produtos)
});

module.exports = router;

router.get('/orcamentos', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(orcamentos)
});

module.exports = router;


module.exports = router;
