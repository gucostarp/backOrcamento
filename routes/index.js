var express = require('express');
var router = express.Router();

const clientes = [
  {
    id: 1,
    nome: 'UNESP Bauru',
    contato: 'Severino',
    departamento: 'Compras',
    cpfcnpj: '10.435.371/0001-50',
    telefone: 16363636363, 
    email: 'unesp@unesp.br',
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

// Obtém uma lista de todos os clientes
router.get('/clientes', function(req, res, next) {
  res.send(clientes)
});

// Obtém um único cliente pelo seu id
router.get('/clientes/:id', function(req, res, next) {

  const cliente = clientes.filter((cliente)=>{
    return cliente.id == req.params.id;
  });

  res.send(cliente[0])
});

// Insere um novo cliente na lista de clientes
router.post('/clientes', function(req, res, next) {
  clientes.push(req.body);
  res.send("Inserido com sucesso");
});

// Altera um cliente na lista de clientes
router.put('/clientes/:id', function(req, res, next) {
  // clientes.push(req.body);
  res.send("Alterado com sucesso");
});



router.get('/produtos', function(req, res, next) {
  res.send(produtos)
});

module.exports = router;

router.get('/orcamentos', function(req, res, next) {
  res.send(orcamentos)
});

module.exports = router;


module.exports = router;
