const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/polo';
let poloA;
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

  const createPoloA = await app.services.polo.create({
    nome: 'IPCA Barcelos',
    localizacao: 'Vila Frescainha (São Martinho)',
  });

  poloA = { ...createPoloA[0] };
});

test('Test #1 - Listar os polos', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar os polos por ID', () => {
  return request(app).get(`${ROUTE}/${poloA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar polo', () => {
  return app.db('polo').insert({
    nome: 'IPCA Barcelos',
    localizacao: 'Vila Frescainha (São Martinho)',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
