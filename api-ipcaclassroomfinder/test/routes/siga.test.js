const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../../source/app');

const secret = '754321';

const ROUTE = '/v1/siga';
let sigaA;
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

  const createSigaA = await app.services.siga.create({
    descricao: 'Servico de Gestao do IPCA',
  });

  sigaA = { ...createSigaA[0] };
});

test('Test #1 - Listar SIGA', () => {
  return request(app).get(ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #1.1 - Listar SIGA por ID', () => {
  return request(app).get(`${ROUTE}/${sigaA.id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Test #3 - Apagar SIGA', () => {
  return app.db('siga').insert({
    descricao: 'Servico de Gestao do IPCA',
  }, ['id']).then((result) => request(app).delete(`${ROUTE}/${result[0].id}`)
    .set('authorization', `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(204);
    }));
});
