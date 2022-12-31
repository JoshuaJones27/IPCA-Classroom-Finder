const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/compra';
let aulaA;
let user;

beforeAll(async () => {

  const createUser = await app.services.utilizador.create({
    nome: 'Alberto',
    sobrenome: 'Duraes',
    email: 'aduraes@ipca.pt',
    palavraPasse: 'adura123_asd',
  });

  user = { ...createUser[0] };
  user.token = jwt.encode(user, secret);

  const createAulaA = await app.services.aula.create({
    nome: 'ISI',
    descricao: 'Cadeira ...',
    rua: 'Vila Frescainha',
  });

  checkoutA = { ...createCheckoutA[0] };
});

test('Test #1 - Listar os checkouts', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar os checkouts por ID', () => {
  return request(app).get(`${ROUTE}/${checkoutA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar checkout', () => {
  return app.db('compra').insert({
    nome: 'alo',
    email: 'olo@gmail.com',
    rua: 'Vila Frescainha',
    cidade: 'Barcelos',
    distrito: 'Braga',
    codPostal: '4700-289',
    nomeCartao: 'Andre',
    cartaoCredito: '1122-2233-3344-4455',
    mesValidade: 'Agosto',
    anoValidade: '1999',
    cvv: '123',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
